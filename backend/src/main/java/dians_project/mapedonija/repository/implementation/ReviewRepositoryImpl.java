package dians_project.mapedonija.repository.implementation;

import dians_project.mapedonija.repository.DbConnection;
import dians_project.mapedonija.model.Review;
import dians_project.mapedonija.model.Shop;
import dians_project.mapedonija.repository.ReviewRepository;
import dians_project.mapedonija.repository.ShopRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.concurrent.ExecutionException;

@Repository
public class ReviewRepositoryImpl implements ReviewRepository {

    private final DbConnection shopDb;
    private final ShopRepository shopRepository;

    public ReviewRepositoryImpl(ShopRepository shopRepository) {
        this.shopRepository = shopRepository;
        this.shopDb = DbConnection.getInstance();
    }


    @Override
    public List<Review> listAllByShop(String shopId) throws ExecutionException, InterruptedException {
        Shop shop = this.shopRepository.getShopById(shopId);
        return shop.getReviewList();
    }

    @Override
    public HttpStatus add(String shopId, Review review) throws ExecutionException, InterruptedException {
        Shop shop = this.shopRepository.getShopById(shopId);
        List<Review> reviews = shop.getReviewList();
        reviews.add(review);
        updateReviewList(shopId, reviews);
        this.shopRepository.updateAverageGrade(shop);
        return HttpStatus.OK;
    }

    @Override
    public List<Review> delete(String shopId, int reviewId) throws ExecutionException, InterruptedException {
        Shop shop = this.shopRepository.getShopById(shopId);
        List<Review> reviews = shop.getReviewList();
        reviews.remove(reviewId);
        updateReviewList(shopId, reviews);
        this.shopRepository.updateAverageGrade(shop);
        return reviews;
    }

    @Override
    public void updateReviewList(String shopId, List<Review> reviewList) {
        this.shopDb.getDocumentEntryReference("shops", shopId).update("reviewList", reviewList);
    }
}
