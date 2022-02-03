package nl.hu.consultant.skill.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Progress")
public class Progress {
    @Id
    @GeneratedValue
    @Setter @Getter
    private int id;

    @Setter @Getter
    private double openness;

    @Setter @Getter
    private double culturalEmpathy;

    @Setter @Getter
    private double openmindness;

    @Setter @Getter
    private double adaptability;

    @Setter @Getter
    private double flexibility;

    @Setter @Getter
    private double emotionalStability;

    @Setter @Getter
    private double socialInitiative;

    @Setter @Getter
    private int userId;

    public Progress() {
    }

    public Progress(
            int id,
            double openness,
            double culturalEmpathy,
            double openmindness,
            double adaptability,
            double flexibility,
            double emotionalStability,
            double socialInitiative) {
        this.id = id;
        this.openness = openness;
        this.culturalEmpathy = culturalEmpathy;
        this.openmindness = openmindness;
        this.adaptability = adaptability;
        this.flexibility = flexibility;
        this.emotionalStability = emotionalStability;
        this.socialInitiative = socialInitiative;
    }

    public Progress(
            int id,
            double openness,
            double culturalEmpathy,
            double openmindness,
            double adaptability,
            double flexibility,
            double emotionalStability,
            double socialInitiative,
            int userId) {
        this.id = id;
        this.openness = openness;
        this.culturalEmpathy = culturalEmpathy;
        this.openmindness = openmindness;
        this.adaptability = adaptability;
        this.flexibility = flexibility;
        this.emotionalStability = emotionalStability;
        this.socialInitiative = socialInitiative;
        this.userId = userId;
    }

    @Override
    public String toString() {
        return "Progress{" +
                "id=" + id +
                ", openness=" + openness +
                ", culturalEmpathy=" + culturalEmpathy +
                ", openmindness=" + openmindness +
                ", adaptability=" + adaptability +
                ", flexibility=" + flexibility +
                ", emotionalStability=" + emotionalStability +
                ", socialInitiative=" + socialInitiative +
                ", userId=" + userId +
                '}';
    }
}