package dians_project.mapedonija.model;

import lombok.*;
//import javax.persistence.*;

//@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Shop {
    //@Id
    //@Column(name = "id", nullable = false)
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
