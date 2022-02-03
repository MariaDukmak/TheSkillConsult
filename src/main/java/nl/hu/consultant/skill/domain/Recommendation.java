package nl.hu.consultant.skill.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Recommendation")
public class Recommendation {
    @Id
    @GeneratedValue
    @Setter @Getter
    private int id;

    @Setter @Getter
    private int userId;

    @Setter @Getter
    private String name;

    public Recommendation() {
    }

    public Recommendation(int id, String name) {
        this.id = id;
        this.name = name;
    }
    public Recommendation(int id, String name, int userId) {
        this.id = id;
        this.name = name;
        this.userId = userId;
    }
}