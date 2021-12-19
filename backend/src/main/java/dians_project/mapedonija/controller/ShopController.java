package dians_project.mapedonija.controller;

import com.google.cloud.firestore.FieldValue;
import com.google.protobuf.Timestamp;
import com.google.protobuf.TimestampOrBuilder;
import dians_project.mapedonija.model.DummyShop;
import dians_project.mapedonija.model.Review;
import dians_project.mapedonija.model.Shop;
import dians_project.mapedonija.service.ShopService;
import org.springframework.web.bind.annotation.*;

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
    public List<DummyShop> getAllShops() throws Exception {
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
    public Shop updateShop(@RequestBody Shop shop) throws ExecutionException, InterruptedException {
        return shopService.updateShop(shop);
    }

    @GetMapping("/{id}/reviews")
    public List<Review> getReviewList(@PathVariable String id) throws ExecutionException, InterruptedException{
        return shopService.reviewList(id);
    }

    @PostMapping(value = "/{id}/add-review")    //treba da se prati shopId, i plus: username, comment, grade vo objekt
    public String addShopReview(@PathVariable String id, @RequestBody Review review) throws ExecutionException, InterruptedException{
        return shopService.addReviews(id,review);
    }

    @DeleteMapping("/{id}/delete-review")
    public Shop deleteShopReview(@PathVariable String id, @RequestParam int reviewId)  throws ExecutionException, InterruptedException{
        return shopService.deleteReview(id,reviewId);
    }


}
