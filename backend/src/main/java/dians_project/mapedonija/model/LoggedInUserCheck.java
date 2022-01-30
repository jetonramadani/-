package dians_project.mapedonija.model;

import org.springframework.http.HttpStatus;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;

/**
 * The purpose of this class is to check if a user's token is valid. A token is made up of a user's username, special characters
 * and an expiration date. A token is valid only if the current date is not past the token's expiration date.
 * If a token is invalid, that means the user's session has expired and he is not allowed to access certain methods
 */


public class LoggedInUserCheck {

    private static LoggedInUserCheck instance;

    private LoggedInUserCheck() {}

    public static LoggedInUserCheck getInstance() {
       synchronized (LoggedInUserCheck.class) {
            if (instance == null) {
                instance = new LoggedInUserCheck();
            }

            return instance;
        }
    }

    public boolean check(String token) {
        String decryptedToken;

        if (token != null && !token.isEmpty()) {
            decryptedToken = AESEncryptionDecryption.getInstance().decrypt(token);
        } else {
            return false;
        }

        if (!decryptedToken.matches(".+###\\d{4}-\\d\\d-\\d\\dT\\d\\d:\\d\\d:\\d\\d")) {
            return false;
        }

        String[] tokenTime = decryptedToken.split("###", 2);
        LocalDateTime tokenDateTime = LocalDateTime.parse(tokenTime[1], DateTimeFormatter.ISO_LOCAL_DATE_TIME);

        return !tokenDateTime.isBefore(LocalDateTime.now(ZoneId.of("GMT+1")));
    }
}
