package dians_project.mapedonija.service.implementation;

import dians_project.mapedonija.model.Review;
import dians_project.mapedonija.repository.ReviewRepository;
import dians_project.mapedonija.service.ReviewService;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.concurrent.ExecutionException;

@Service
public class ReviewServiceImpl implements ReviewService {

    private final ReviewRepository reviewRepository;

    public ReviewServiceImpl(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    public List<Review> reviewList(String id) throws ExecutionException, InterruptedException {
        return this.reviewRepository.listAllByShop(id);
    }

    public HttpStatus addReviews(String id, Review review) throws ExecutionException, InterruptedException {
        return this.reviewRepository.add(id, review);
    }

    public List<Review> deleteReview(String id, int reviewId) throws ExecutionException, InterruptedException {
        return this.reviewRepository.delete(id, reviewId);
    }

    public void updateReviewList(String id, List<Review> reviews) {
        this.reviewRepository.updateReviewList(id, reviews);
    }
}
