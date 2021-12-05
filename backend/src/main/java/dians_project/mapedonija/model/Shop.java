package dians_project.mapedonija.model;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Shop {
    private String id;
    private String address;
    private String email;
    private String name;
    private String phone;
    private String website;
    private String opening_hours;
    private String category;
    private double lat;
    private double lon;
}
