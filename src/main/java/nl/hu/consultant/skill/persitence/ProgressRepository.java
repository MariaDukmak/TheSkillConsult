package nl.hu.consultant.skill.persitence;

import nl.hu.consultant.skill.domain.Progress;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProgressRepository extends JpaRepository<Progress, Long>  {
    List<Progress> findByUserId(int user_id);
}
