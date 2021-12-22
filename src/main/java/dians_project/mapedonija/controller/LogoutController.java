package dians_project.mapedonija.controller;

import dians_project.mapedonija.model.User;
import dians_project.mapedonija.service.AuthService;
import org.apache.http.auth.InvalidCredentialsException;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/logout")
public class LogoutController {

    private final AuthService authService;

    public LogoutController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping
    public String logout(HttpServletRequest request) throws ExecutionException, InterruptedException {
        request.getSession().invalidate();
        return "redirect:/login";
    }
}