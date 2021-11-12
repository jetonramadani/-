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
    //Firestore dbFirestore = FirestoreClient.getFirestore(); moze tuka

    public String createShop(Shop shop) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> collectionsApiFuture = dbFirestore
                .collection("shops").document(shop.getId()).set(shop);
        return collectionsApiFuture.get().getUpdateTime().toString();
    }

    public Shop getShop(String id) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentReference documentReference = dbFirestore.collection("shops").document(id);
        ApiFuture<DocumentSnapshot> future = documentReference.get();
        DocumentSnapshot document = future.get();
        Shop shop;
        if(document.exists()){
            shop = document.toObject(Shop.class);
            return shop;
        }
        return null;
    }

}
