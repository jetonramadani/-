package dians_project.mapedonija.service;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import dians_project.mapedonija.model.Shop;
import org.springframework.stereotype.Service;
import com.google.cloud.firestore.Firestore;    //za od google da go zema

import java.util.concurrent.ExecutionException;

@Service
public class ShopService {
    Firestore dbFirestore = FirestoreClient.getFirestore();

    public String createShop(Shop shop) throws ExecutionException, InterruptedException {
        ApiFuture<WriteResult> collectionsApiFuture = dbFirestore
                .collection("shops").document(shop.getId()).set(shop);
        return collectionsApiFuture.get().getUpdateTime().toString();
    }

    public Shop getShop(String id) throws ExecutionException, InterruptedException {
        DocumentReference documentReference = dbFirestore.collection("shops").document(id);
        ApiFuture<DocumentSnapshot> future = documentReference.get();
        DocumentSnapshot document = future.get();
        Shop shop;
        if (document.exists()) {
            shop = document.toObject(Shop.class);
            return shop;
        }
        return null;
    }

    public String updateShop(Shop shop) throws ExecutionException, InterruptedException {
        ApiFuture<WriteResult> writeResultApiFuture = dbFirestore.collection("shops").document(shop.getId()).set(shop);
        return writeResultApiFuture.get().getUpdateTime().toString();
    }

    public String deleteShop(String id) {
        ApiFuture<WriteResult> writeResultApiFuture = dbFirestore.collection("shops").document(id).delete();
        return "Successfully deleted shop with id: " + id;
    }
}
