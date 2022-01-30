package dians_project.mapedonija.service.implementation;

import dians_project.mapedonija.model.DummyShop;
import dians_project.mapedonija.model.Shop;
import dians_project.mapedonija.repository.ShopRepository;
import dians_project.mapedonija.service.ShopService;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutionException;

@Service
public class ShopServiceImpl implements ShopService {

    private final RestTemplate restTemplate;
    private final ShopRepository shopRepository;

    public ShopServiceImpl(RestTemplate restTemplate, ShopRepository shopRepository) {
        this.restTemplate = restTemplate;
        this.shopRepository = shopRepository;
    }

    public DummyShop createShop(Shop shop) throws ExecutionException, InterruptedException {
        return this.shopRepository.create(shop);
    }

    public Shop getShopById(String id) throws ExecutionException, InterruptedException {
        return this.shopRepository.getShopById(id);
    }

    public DummyShop getDummyShopById(String id) throws ExecutionException, InterruptedException {
        return this.shopRepository.getDummyShopById(id);
    }

    public List<DummyShop> getAllShops() throws Exception {
        return this.shopRepository.listAll();
    }

    public DummyShop updateShop(Map<String, Object> shop, String id) {
        return this.shopRepository.update(shop, id);
    }

    public boolean deleteShop(String id) throws ExecutionException, InterruptedException {
        return this.shopRepository.delete(id);
    }

    public List<String> getCategories() {
        String[] cats = restTemplate.getForObject("https://mapedonija-default-rtdb.europe-west1.firebasedatabase.app/categories.json", String[].class);
        if (cats == null) {
            throw new NullPointerException("No categories found");
        }
        return Arrays.asList(cats);
    }

    public List<String> getCities() {
        String[] cats = restTemplate.getForObject("https://mapedonija-default-rtdb.europe-west1.firebasedatabase.app/cities.json", String[].class);
        if (cats == null) {
            throw new NullPointerException("No categories found");
        }
        return Arrays.asList(cats);
    }

    public void updateAvgGrade(Shop shop) {
        this.shopRepository.updateAverageGrade(shop);
    }
}
