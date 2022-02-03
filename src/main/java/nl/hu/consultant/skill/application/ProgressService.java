package nl.hu.consultant.skill.application;

import nl.hu.consultant.skill.domain.Progress;
import nl.hu.consultant.skill.persitence.ProgressRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProgressService {
    private final ProgressRepository progressRepository;

    public ProgressService(ProgressRepository progressRepository) {
        this.progressRepository = progressRepository;
    }

    public List<Progress> LoadProgressByUserId(int userId) {
        return this.progressRepository.findByUserId(userId);
    }
}
