package dians_project.mapedonija.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Review {
    private String username;
    private String comment;
    private int grade;
    private String gender;
    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private LocalDateTime timestamp;
}
