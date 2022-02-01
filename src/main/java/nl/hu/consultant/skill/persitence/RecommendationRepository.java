package nl.hu.consultant.skill.persitence;

import nl.hu.consultant.skill.domain.Recommendation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecommendationRepository extends JpaRepository<Recommendation, Long> {
    Recommendation findByUserId(int user_id);
}
