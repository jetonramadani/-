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
    public String createShop(@RequestBody Shop shop) throws InterruptedException, ExecutionException {
        return shopService.createShop(shop);
    }

    @GetMapping("/get/{id}")
    public Shop getShop(@PathVariable String id) throws InterruptedException, ExecutionException {
        return shopService.getShop(id);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteShop(@PathVariable String id) {
        return shopService.deleteShop(id);
    }

    @PutMapping("/update/{id}")
    public String updateShop(@RequestBody Shop shop) throws ExecutionException, InterruptedException {
        return shopService.updateShop(shop);
    }
}
