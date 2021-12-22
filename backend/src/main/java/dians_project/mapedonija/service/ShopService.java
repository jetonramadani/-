package dians_project.mapedonija.service;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import dians_project.mapedonija.model.DummyShop;
import dians_project.mapedonija.model.Review;
import dians_project.mapedonija.model.Shop;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;
import java.util.concurrent.ExecutionException;
import java.util.stream.Collectors;

@Service
public class ShopService {
    Firestore dbFirestore = FirestoreClient.getFirestore();
    private final RestTemplate restTemplate;

    public ShopService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public String createShop(Shop shop) throws ExecutionException, InterruptedException {
        ApiFuture<DocumentReference> addedDocRef = dbFirestore.collection("shops").add(shop);
        System.out.println("Added document with ID: " + addedDocRef.get().getId());
        return addedDocRef.get().getId();
    }

    public Shop getShopById(String id) throws ExecutionException, InterruptedException {
        DocumentReference documentReference = dbFirestore.collection("shops").document(id);
        ApiFuture<DocumentSnapshot> future = documentReference.get();
        DocumentSnapshot document = future.get();
        Shop shop;
        if (document.exists()) {
            shop = document.toObject(Shop.class);
            //assert shop != null;
            if (shop != null) {
                shop.setId(id);
                return shop;
            }
        }
        return null;
    }

    public List<Shop> getShopByName(String name) throws ExecutionException, InterruptedException {
        CollectionReference shops = dbFirestore.collection("shops");
        /*
        The character \uf8ff used in the query is a very high code point in the Unicode range (it is a Private Usage Area [PUA] code).
        Because it is after most regular characters in Unicode, the query matches all values that start with queryText.
         */
        Query query = shops.orderBy("shopName").startAt(name).endAt(name + '~'); // '~' == \uf8ff
        ApiFuture<QuerySnapshot> querySnapshot = query.get();
        List<QueryDocumentSnapshot> documents = querySnapshot.get().getDocuments();
        return documents.stream().map(i -> i.toObject(Shop.class)).collect(Collectors.toList());
    }

    public List<DummyShop> getAllShops() throws Exception {
        ApiFuture<QuerySnapshot> future = dbFirestore.collection("shops").get();
        List<QueryDocumentSnapshot> documents = future.get().getDocuments();
        return documents
                .stream()
                .map(i -> {
                    DummyShop shop = i.toObject(DummyShop.class);
                    shop.setId(i.getId());
                    return shop;
                }).collect(Collectors.toList());
    }

    public Shop updateShop(Shop shop) {
        dbFirestore.collection("shops").document(shop.getId()).set(shop);
        return shop;
    }

    public String deleteShop(String id) {
        dbFirestore.collection("shops").document(id).delete();
        return "Successfully deleted shop with id: " + id;
    }

    // in the refactor phase of the project this whole backend architecture is getting a makeover :P
    public List<String> getCategories() {
        String[] cats = restTemplate.getForObject("https://mapedonija-default-rtdb.europe-west1.firebasedatabase.app/categories.json", String[].class);
        if (cats == null) {
            throw new NullPointerException("No categories found");
        }
        return Arrays.asList(cats);
    }

    public List<String> getCities() {
        String[] cats = restTemplate.getForObject("https://mapedonija-default-rtdb.europe-west1.firebasedatabase.app/cities.json", String[].class);
        if (cats == null) {
            throw new NullPointerException("No categories found");
        }
        return Arrays.asList(cats);
    }

    public List<Review> reviewList(String id) throws ExecutionException, InterruptedException {
        Shop shop = getShopById(id);
        return shop.getReviewList();
    }

    //dali da se pravi proverka za dali se okej vneseni i prateni site atributi od review
    public String addReviews(String id, Review review) throws ExecutionException, InterruptedException {
        Shop shop = getShopById(id);
        shop.getReviewList().add(review);
        updateShop(shop); //da se snimi vo databaza ovoj nov objekt
        updateAvgGrade(shop);
        return "Successfully added a review to the shop and updated its average grade";
    }

    public void updateAvgGrade(Shop shop) {
        double avgGrade;
        int grades = shop.getReviewList().stream().mapToInt(Review::getGrade).sum();
        avgGrade = (double) grades / shop.getReviewList().size();
        dbFirestore.collection("shops").document(shop.getId()).update("avgGrade", avgGrade);
    }

    public Shop deleteReview(String id, int reviewId) throws ExecutionException, InterruptedException {
        Shop shop = getShopById(id);
        shop.getReviewList().remove(reviewId);
        updateShop(shop);
        return shop;
    }

    //za createShop,
}
