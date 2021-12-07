package nl.hu.consultant.skilltree.domain;

public class Recommendation {
    private int id;
    private String name;
    private Type type;
    private Skill skill;

    public Recommendation(int id, String name, Type type, Skill skill) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.skill = skill;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Type getType() {
        return type;
    }

    public void setType(Type type) {
        this.type = type;
    }

    public Skill getSkill() {
        return skill;
    }

    public void setSkill(Skill skill) {
        this.skill = skill;
    }
}