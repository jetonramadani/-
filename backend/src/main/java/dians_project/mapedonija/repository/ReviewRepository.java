package dians_project.mapedonija.repository;

import dians_project.mapedonija.model.Review;
import org.springframework.http.HttpStatus;

import java.util.List;
import java.util.concurrent.ExecutionException;

public interface ReviewRepository {
    List<Review> listAllByShop(String shopId) throws ExecutionException, InterruptedException;
    HttpStatus add(String shopId, Review review) throws ExecutionException, InterruptedException;
    List<Review> delete(String shopId, int reviewId) throws ExecutionException, InterruptedException;
    void updateReviewList(String shopId, List<Review> reviewList);
}
