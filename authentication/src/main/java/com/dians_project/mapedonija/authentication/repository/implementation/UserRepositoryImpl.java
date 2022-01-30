package com.dians_project.mapedonija.authentication.repository.implementation;

import com.dians_project.mapedonija.authentication.model.User;
import com.dians_project.mapedonija.authentication.repository.DbConnection;
import com.dians_project.mapedonija.authentication.repository.UserRepository;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.QueryDocumentSnapshot;
import com.google.cloud.firestore.QuerySnapshot;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.concurrent.ExecutionException;
import java.util.stream.Collectors;

@Repository
public class UserRepositoryImpl implements UserRepository {

    private final DbConnection shopDb;

    public UserRepositoryImpl() {
        this.shopDb = DbConnection.getInstance();
    }

    @Override
    public List<User> listAll() throws ExecutionException, InterruptedException {
        return this.shopDb.getDocumentCollection("users").stream().map(i -> i.toObject(User.class)).collect(Collectors.toList());
    }

    @Override
    public User getUser(String username) throws ExecutionException, InterruptedException {
        DocumentReference documentReference = this.shopDb.getDocumentEntryReference("users", username);
        ApiFuture<DocumentSnapshot> future = documentReference.get();
        DocumentSnapshot document = future.get();

        User user = null;
        if (document.exists()) {
            user = document.toObject(User.class);
        }
        return user;
    }
}
