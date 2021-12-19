package dians_project.mapedonija.controller;


import dians_project.mapedonija.model.User;
import dians_project.mapedonija.service.UserService;
import org.apache.http.auth.InvalidCredentialsException;
import org.springframework.web.bind.annotation.*;

import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/get")
    public User getUser(@RequestBody User user) throws InvalidCredentialsException, ExecutionException, InterruptedException {
        return this.userService.getUser(user.getUsername(), user.getPassword());
    }

    private boolean isLoggedIn() {
        // TODO check if a user is in session
        return false;
    }

}
