package com.dians_project.mapedonija.authentication.service;

import com.dians_project.mapedonija.authentication.model.User;
import org.apache.http.auth.InvalidCredentialsException;

import java.util.concurrent.ExecutionException;

public interface AuthService {
    User login(String username, String password) throws InvalidCredentialsException, ExecutionException, InterruptedException;
}
