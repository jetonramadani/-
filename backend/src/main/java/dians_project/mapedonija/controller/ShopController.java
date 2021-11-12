package dians_project.mapedonija.controller;

import dians_project.mapedonija.model.Shop;
import dians_project.mapedonija.service.ShopService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.concurrent.ExecutionException;

//throws InterruptedException, ExecutionException za FireBase

@RestController
@RequestMapping(path = "/shop")
public class ShopController {

    public final ShopService shopService;

    public ShopController(ShopService shopService) {
        this.shopService = shopService;
    }

    @PostMapping("/create")
    public String createShop(@RequestBody Shop shop) throws InterruptedException, ExecutionException{
        return shopService.createShop(shop);
    }

    @GetMapping("/get/{id}")
    public Shop getShop(@PathVariable String id)throws InterruptedException, ExecutionException{
        return shopService.getShop(id);
    }

    @GetMapping("/test")
    public ResponseEntity<String> testGetEndpoint(){
        return ResponseEntity.ok("Test Get Endpoint is working");
    }
}
