package nl.hu.consultant.skill.application;

import nl.hu.consultant.skill.domain.Recommendation;
import nl.hu.consultant.skill.persitence.RecommendationRepository;
import org.springframework.stereotype.Service;

@Service
public class RecommendationService {
    private final RecommendationRepository recommendationRepository;

    public RecommendationService(RecommendationRepository recommendationRepository) {
        this.recommendationRepository = recommendationRepository;
    }

    public Recommendation loadRecomendationByUserId(int userId) {
        return this.recommendationRepository.findByUserId(userId);
    }
}
