package com.dians_project.mapedonija.authentication.controller;

import com.dians_project.mapedonija.authentication.model.AESEncryptionDecryption;
import com.dians_project.mapedonija.authentication.model.TokenGenerator;
import com.dians_project.mapedonija.authentication.model.User;
import com.dians_project.mapedonija.authentication.service.AuthService;
import org.apache.http.auth.InvalidCredentialsException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/login")
@CrossOrigin
public class LoginController {

    private final AuthService authService;

    public LoginController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping
    public ResponseEntity<String> login(@RequestBody User userBody) throws ExecutionException, InterruptedException {
        try {
            this.authService.login(userBody.getUsername(), userBody.getPassword());
            String token = TokenGenerator.getInstance().generateToken(userBody.getUsername());
            String encrypted = AESEncryptionDecryption.getInstance().encrypt(token);
            return ResponseEntity.ok(encrypted);
        } catch (InvalidCredentialsException e) {
            return ResponseEntity.status(401).build();
        }
    }

    @GetMapping("/isLoggedIn")
    public String isLoggedIn(HttpServletRequest request) {
        String token = request.getHeader("Authorization");
        String decryptedToken;

        if (token != null && !token.isEmpty()) {
            decryptedToken = AESEncryptionDecryption.getInstance().decrypt(token);
        } else {
            return HttpStatus.TEMPORARY_REDIRECT.toString();
        }

        if (!decryptedToken.matches(".+###\\d{4}-\\d\\d-\\d\\dT\\d\\d:\\d\\d:\\d\\d")) {
            return HttpStatus.TEMPORARY_REDIRECT.toString();
        }

        String[] tokenTime = decryptedToken.split("###", 2);
        LocalDateTime tokenDateTime = LocalDateTime.parse(tokenTime[1], DateTimeFormatter.ISO_LOCAL_DATE_TIME);

        if (tokenDateTime.isBefore(LocalDateTime.now(ZoneId.of("GMT+1")))) {
            return HttpStatus.TEMPORARY_REDIRECT.toString();
        } else {
            return decryptedToken;
        }
    }

}
