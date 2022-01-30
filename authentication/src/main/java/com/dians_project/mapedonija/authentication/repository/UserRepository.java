package com.dians_project.mapedonija.authentication.repository;

import com.dians_project.mapedonija.authentication.model.User;

import java.util.List;
import java.util.concurrent.ExecutionException;

public interface UserRepository {
    List<User> listAll() throws ExecutionException, InterruptedException;
    User getUser(String username) throws ExecutionException, InterruptedException;
}
