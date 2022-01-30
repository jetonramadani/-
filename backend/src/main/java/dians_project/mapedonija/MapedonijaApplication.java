package dians_project.mapedonija;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.io.ClassPathResource;
import java.io.IOException;
import java.io.InputStream;


@SpringBootApplication
public class MapedonijaApplication {

    public static void main(String[] args) throws IOException {

        InputStream is = new ClassPathResource("/serviceAccountKey/serviceAccountKey.json").getInputStream();

        FirebaseOptions options = new FirebaseOptions.Builder()
                .setCredentials(GoogleCredentials.fromStream(is))
                .setDatabaseUrl("https://mapedonija-default-rtdb.europe-west1.firebasedatabase.app/")
                .build();

        FirebaseApp.initializeApp(options);

        SpringApplication.run(MapedonijaApplication.class, args);
    }

}
