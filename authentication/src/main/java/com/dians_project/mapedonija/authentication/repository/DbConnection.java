package com.dians_project.mapedonija.authentication.repository;

import com.google.cloud.firestore.CollectionReference;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.QueryDocumentSnapshot;
import com.google.firebase.cloud.FirestoreClient;

import java.util.List;
import java.util.concurrent.ExecutionException;

public class DbConnection {
    private static DbConnection instance;

    private DbConnection() {}

    public static DbConnection getInstance() {
        synchronized (DbConnection.class) {
            if (instance == null) {
                instance = new DbConnection();
            }

            return instance;
        }
    }

    public Firestore getDatabase() {
        return FirestoreClient.getFirestore();
    }

    public CollectionReference getDocumentCollectionReference(String document) {
        return getDatabase().collection(document);
    }

    public DocumentReference getDocumentEntryReference(String document, String id) {
        return getDocumentCollectionReference(document).document(id);
    }

    public List<QueryDocumentSnapshot> getDocumentCollection(String document) throws ExecutionException, InterruptedException {
        return getDatabase().collection(document).get().get().getDocuments();
    }
}
