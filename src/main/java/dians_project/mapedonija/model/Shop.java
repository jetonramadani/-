package dians_project.mapedonija.model;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Shop {
    private String id;  //zaradi document_id
    private String streetAddress;
    private String emailAddress;
    private String shopName;
    private String phoneNumber;
    private String website;
    private String workHours;
    private String category;
    private double lat;
    private double lon;
}
