package dians_project.mapedonija.service;

import dians_project.mapedonija.model.Review;
import org.springframework.http.HttpStatus;

import java.util.List;
import java.util.concurrent.ExecutionException;

public interface ReviewService {
    List<Review> reviewList(String id) throws ExecutionException, InterruptedException;
    HttpStatus addReviews(String id, Review review) throws ExecutionException, InterruptedException;
    List<Review> deleteReview(String id, int reviewId) throws ExecutionException, InterruptedException;
    void updateReviewList(String id, List<Review> reviews);
}
