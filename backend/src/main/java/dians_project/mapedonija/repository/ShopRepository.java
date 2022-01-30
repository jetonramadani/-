package dians_project.mapedonija.repository;

import dians_project.mapedonija.model.DummyShop;
import dians_project.mapedonija.model.Review;
import dians_project.mapedonija.model.Shop;

import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutionException;

public interface ShopRepository {
    DummyShop create(Shop shop) throws ExecutionException, InterruptedException;
    Shop getShopById(String id) throws ExecutionException, InterruptedException;
    DummyShop getDummyShopById(String id) throws ExecutionException, InterruptedException;
    List<DummyShop> listAll() throws ExecutionException, InterruptedException;
    DummyShop update(Map<String, Object> shop, String id);
    boolean delete(String id) throws ExecutionException, InterruptedException;
     void updateAverageGrade(Shop shop);
}
