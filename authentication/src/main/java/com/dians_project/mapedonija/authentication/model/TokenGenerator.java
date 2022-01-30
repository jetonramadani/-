package com.dians_project.mapedonija.authentication.model;

import java.time.LocalDateTime;

public class TokenGenerator {
    private static TokenGenerator instance;

    private TokenGenerator() {}

    public static TokenGenerator getInstance() {
        synchronized (TokenGenerator.class) {
            if (instance == null) {
                instance = new TokenGenerator();
            }
            return instance;
        }
    }

    public String generateToken(String username) {
        return username + "###" + LocalDateTime.now().plusMinutes(20);
    }

}
