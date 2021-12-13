package dians_project.mapedonija.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class DummyShop {
    private String id;
    private String address;
    private String name;
    private String category;
    private double avgGrade;
    private double lat;
    private double lon;
}
