package dians_project.mapedonija.repository.implementation;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.QueryDocumentSnapshot;
import dians_project.mapedonija.repository.DbConnection;
import dians_project.mapedonija.model.DummyShop;
import dians_project.mapedonija.model.Review;
import dians_project.mapedonija.model.Shop;
import dians_project.mapedonija.repository.ShopRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutionException;
import java.util.stream.Collectors;

@Repository
public class ShopRepositoryImpl implements ShopRepository {

    private final DbConnection shopDb;

    public ShopRepositoryImpl() {
        this.shopDb = DbConnection.getInstance();
    }


    @Override
    public DummyShop create(Shop shop) throws ExecutionException, InterruptedException {
        ApiFuture<DocumentReference> addedDocRef = this.shopDb.getDocumentCollectionReference("shops").add(shop);
        return this.getDummyShopById(addedDocRef.get().getId());
    }

    @Override
    public Shop getShopById(String id) throws ExecutionException, InterruptedException {
        DocumentReference documentReference = this.shopDb.getDocumentEntryReference("shops", id);
        ApiFuture<DocumentSnapshot> future = documentReference.get();
        DocumentSnapshot document = future.get();
        Shop shop;
        if (document.exists()) {
            shop = document.toObject(Shop.class);
            if (shop != null) {
                shop.setId(id);
                return shop;
            }
        }
        return null;
    }

    @Override
    public DummyShop getDummyShopById(String id) throws ExecutionException, InterruptedException {
        DocumentReference documentReference = this.shopDb.getDocumentEntryReference("shops", id);
        ApiFuture<DocumentSnapshot> future = documentReference.get();
        DocumentSnapshot document = future.get();
        DummyShop dummyShop;
        if (document.exists()) {
            dummyShop = document.toObject(DummyShop.class);
            if (dummyShop != null) {
                dummyShop.setId(id);
                return dummyShop;
            }
        }
        return null;
    }

    @Override
    public List<DummyShop> listAll() throws ExecutionException, InterruptedException {
        List<QueryDocumentSnapshot> documentEntries = this.shopDb.getDocumentCollection("shops");
        return documentEntries
                .stream()
                .map(i -> {
                    DummyShop shop = i.toObject(DummyShop.class);
                    shop.setId(i.getId());
                    return shop;
                }).collect(Collectors.toList());
    }

    @Override
    public DummyShop update(Map<String, Object> shop, String id) {
        this.shopDb.getDocumentEntryReference("shops", id).update(shop);

        return new DummyShop
                (
                        id,
                        shop.get("address") == null ? null : shop.get("address").toString(),
                        shop.get("name") == null ? null : shop.get("name").toString(),
                        shop.get("category") == null ? null : shop.get("category").toString(),
                        shop.get("avgGrade") == null ? 0.0 : Double.parseDouble(shop.get("avgGrade").toString()),
                        shop.get("lat") == null ? 0.0 : Double.parseDouble(shop.get("lat").toString()),
                        shop.get("lon") == null ? 0.0 : Double.parseDouble(shop.get("lon").toString())
                );
    }

    @Override
    public boolean delete(String id) throws ExecutionException, InterruptedException {
        this.shopDb.getDocumentEntryReference("shops", id).delete();
        return getShopById(id) == null;
    }

    @Override
    public void updateAverageGrade(Shop shop) {
        double avgGrade = 0.0;

        if (shop.getReviewList().size() > 0) {
            int grades = shop.getReviewList().stream().mapToInt(Review::getGrade).sum();
            avgGrade = (double) grades / shop.getReviewList().size();
        }

        this.shopDb.getDocumentEntryReference("shops", shop.getId()).update("avgGrade", avgGrade);
    }
}
