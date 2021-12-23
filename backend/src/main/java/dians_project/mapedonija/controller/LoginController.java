package dians_project.mapedonija.controller;

import dians_project.mapedonija.model.User;
import dians_project.mapedonija.service.AuthService;
import org.apache.http.auth.InvalidCredentialsException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/login")
@CrossOrigin
public class LoginController {

    private final AuthService authService;

    public LoginController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping
    public HttpStatus login(@RequestBody User userBody) throws ExecutionException, InterruptedException {
        try {
            this.authService.login(userBody.getUsername(), userBody.getPassword());
            return HttpStatus.ACCEPTED;
        } catch (InvalidCredentialsException e) {
            return HttpStatus.NOT_ACCEPTABLE;
        }
    }

    @GetMapping("/isLoggedIn")
    public String isLoggedIn(HttpServletRequest request) {
        String token = request.getHeader("loginToken");
        String[] tokenTime = token.split("###", 2);
        LocalDateTime tokenDateTime = LocalDateTime.parse(tokenTime[1], DateTimeFormatter.ISO_LOCAL_DATE_TIME);

        if (tokenDateTime.isBefore(LocalDateTime.now())) {
            return HttpStatus.TEMPORARY_REDIRECT.toString();
        } else {
            return token;
        }
    }
}
