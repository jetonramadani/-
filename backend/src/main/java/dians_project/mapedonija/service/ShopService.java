package dians_project.mapedonija.service;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import dians_project.mapedonija.model.DummyShop;
import dians_project.mapedonija.model.Review;
import dians_project.mapedonija.model.Shop;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutionException;
import java.util.stream.Collectors;

@Service
public class ShopService {
    Firestore dbFirestore = FirestoreClient.getFirestore();
    private final RestTemplate restTemplate;

    public ShopService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public DummyShop createShop(Shop shop) throws ExecutionException, InterruptedException {
        ApiFuture<DocumentReference> addedDocRef = dbFirestore.collection("shops").add(shop);
        wait(100);
        return getDummyShopById(addedDocRef.get().getId());
    }

    public Shop getShopById(String id) throws ExecutionException, InterruptedException {
        DocumentReference documentReference = dbFirestore.collection("shops").document(id);
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

    public DummyShop getDummyShopById(String id) throws ExecutionException, InterruptedException {
        DocumentReference documentReference = dbFirestore.collection("shops").document(id);
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

    public DummyShop updateShop(Map<String, Object> shop, String id) throws ExecutionException, InterruptedException {
        dbFirestore.collection("shops").document(id).update(shop);
        wait(100);
        return getDummyShopById(id);
    }

    public boolean deleteShop(String id) throws ExecutionException, InterruptedException {
        dbFirestore.collection("shops").document(id).delete();
        wait(100);
        Shop shop = getShopById(id);
        return shop == null;
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

    public DummyShop addReviews(String id, Review review) throws ExecutionException, InterruptedException {
        Shop shop = getShopById(id);
        List<Review> reviews = shop.getReviewList();
        reviews.add(review);
        updateReviewList(id, reviews);
        updateAvgGrade(shop);
        wait(100);
        return getDummyShopById(id);
    }

    public Map<String, Object> deleteReview(String id, int reviewId) throws ExecutionException, InterruptedException {
        Shop shop = getShopById(id);
        List<Review> reviews = shop.getReviewList();
        reviews.remove(reviewId);
        updateReviewList(id, reviews);
        updateAvgGrade(shop);
        wait(100);
        DummyShop dShop = getDummyShopById(id);
        Map<String, Object> map = new HashMap<>();
        map.put("shop", dShop);
        map.put("reviews", reviews);
        return map;
    }

    public void updateAvgGrade(Shop shop) {
        double avgGrade;
        int grades = shop.getReviewList().stream().mapToInt(Review::getGrade).sum();
        avgGrade = (double) grades / shop.getReviewList().size();
        dbFirestore.collection("shops").document(shop.getId()).update("avgGrade", avgGrade);
    }

    private void updateReviewList(String id, List<Review> reviews) {
        dbFirestore.collection("shops").document(id).update("reviewList", reviews);
    }

    private static void wait(int ms)
    {
        try {
            Thread.sleep(ms);
        }
        catch(InterruptedException ex) {
            Thread.currentThread().interrupt();
        }
    }

}
