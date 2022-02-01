package nl.hu.consultant.skill.presentation.controller;


import nl.hu.consultant.skill.application.RecommendationService;
import nl.hu.consultant.skill.domain.Recommendation;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;

@RestController
@RequestMapping("/recommendation")
public class RecommendationController {
    private final RecommendationService recommendationService;

    public RecommendationController(RecommendationService recommendationService) {
        this.recommendationService = recommendationService;
    }

    @PostMapping("/name")
    public @ResponseBody ResponseEntity<String> Recommendation(@Valid @RequestBody Recommendation recommendation) {
        System.out.println("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        System.out.println(recommendation.getUserId());
        Recommendation recName = recommendationService.loadRecomendationByUserId(recommendation.getUserId());
        System.out.println(recName.getName());
        return ResponseEntity.ok().header("test").body(recName.getName());
    }

}
