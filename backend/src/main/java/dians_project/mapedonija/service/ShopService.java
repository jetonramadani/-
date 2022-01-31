package dians_project.mapedonija.service;

import dians_project.mapedonija.model.DummyShop;
import dians_project.mapedonija.model.Shop;

import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutionException;

public interface ShopService {
    DummyShop createShop(Shop shop) throws ExecutionException, InterruptedException;
    Shop getShopById(String id) throws ExecutionException, InterruptedException;
    DummyShop getDummyShopById(String id) throws ExecutionException, InterruptedException;
    List<DummyShop> getAllShops() throws Exception;
    DummyShop updateShop(Map<String, Object> shop, String id);
    boolean deleteShop(String id) throws ExecutionException, InterruptedException;
    List<String> getCategories();
    List<String> getCities();
    void updateAvgGrade(Shop shop);
}
