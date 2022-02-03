package nl.hu.consultant.skill.presentation.controller;

import nl.hu.consultant.skill.application.ProgressService;
import nl.hu.consultant.skill.domain.Progress;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/progress")
public class ProgressController {
    private final ProgressService progressService;

    public ProgressController(ProgressService progressService){
        this.progressService = progressService;
    }

    @PostMapping("/results")
    public @ResponseBody
    ResponseEntity<List<Progress>> Progress(@RequestBody Progress progress) {
        System.out.println("test progress");
        List<Progress> proList = progressService.LoadProgressByUserId(progress.getUserId());
        System.out.println(proList.get(0));
        System.out.println(proList.get(1));
        return ResponseEntity.ok().header("ProgressList").body(proList);
    }
}
