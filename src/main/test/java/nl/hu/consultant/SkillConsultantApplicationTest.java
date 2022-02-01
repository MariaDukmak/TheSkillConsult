package java.nl.hu.consultant;

import nl.hu.consultant.security.persistence.UserRepository;
import nl.hu.consultant.skill.persitence.RecommendationRepository;
import nl.hu.consultant.security.application.UserService;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class SkillConsultantApplicationTest {
    private RecommendationRepository recommendationRepository;
    private UserRepository userRepository;

    @Test
    void contextLoads(){

    }
}