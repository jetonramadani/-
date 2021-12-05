package dians_project.mapedonija.controller;

import dians_project.mapedonija.model.Shop;
import dians_project.mapedonija.service.ShopService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping(path = "/shop")
public class ShopController {

    private final ShopService shopService;


    public ShopController(ShopService shopService) {
        this.shopService = shopService;
    }

    @PostMapping("/create")
    public String createShop(@RequestBody Shop shop) throws InterruptedException, ExecutionException {
        return shopService.createShop(shop);
    }

    @GetMapping("/all")
    public List<Shop> getAllShops() throws Exception {
        return shopService.getAllShops();
    }

    @GetMapping("/get/{id}")
    public Shop getShopById(@PathVariable String id) throws InterruptedException, ExecutionException {
        return shopService.getShopById(id);
    }

    // put the shop name in a query string
    @GetMapping("/get")
    public List<Shop> getShopByName(@RequestParam String name) throws ExecutionException, InterruptedException {
        return shopService.getShopByName(name);
    }

    @GetMapping("/categories")
    public List<String> getCategories() {
        return shopService.getCategories();
    }

    @GetMapping("/cities")
    public List<String> getCities() {
        return shopService.getCities();
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
