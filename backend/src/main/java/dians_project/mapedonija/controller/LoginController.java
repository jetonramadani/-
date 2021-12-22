package dians_project.mapedonija.controller;


import dians_project.mapedonija.model.User;
import dians_project.mapedonija.service.AuthService;
import org.apache.http.auth.InvalidCredentialsException;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/login")
public class LoginController {

    private final AuthService authService;

    public LoginController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping
    public String login(HttpServletRequest request) throws ExecutionException, InterruptedException {
        User u;

        // TODO: tuka najv ke imame problemi so redirekcitie
        try {
            u = this.authService.login(request.getParameter("username"), request.getParameter("password"));
            request.getSession().setAttribute("user", u);
            return "redirect:/home";
        } catch (InvalidCredentialsException e) {
            return "redirect:/login";
        }
    }

    private boolean isLoggedIn() {
        // TODO check if a user is in session
        return false;
    }

}