package nl.hu.consultant.security.presentation.controller;

import nl.hu.consultant.security.application.UserService;
import nl.hu.consultant.security.domain.Role;
import nl.hu.consultant.security.domain.User;
import nl.hu.consultant.security.presentation.dto.UserRequestDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PatchMapping("/edit")
    public @ResponseBody ResponseEntity<?> edit(@Valid @RequestBody UserRequestDTO dto){
        if (userService.edit(dto.username, dto.password)){
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.CONFLICT);
    }

    @GetMapping("/students")
    public @ResponseBody ResponseEntity<List<User>> students(){
        List<User> students = userService.loadAllUsersByRole(Role.STUDENT);
        System.out.println(students);
        return ResponseEntity.ok().header("students").body(students);
    }

    // voor de test
    @GetMapping("/teachers")
    public @ResponseBody ResponseEntity<List<User>> teachers(){
        List<User> teachers = userService.loadAllUsersByRole(Role.TEACHER);
        System.out.println(teachers);
        return ResponseEntity.ok().header("teachers").body(teachers);
    }

}
