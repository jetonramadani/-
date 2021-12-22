package dians_project.mapedonija.controller;

import dians_project.mapedonija.model.User;
import dians_project.mapedonija.service.AuthService;
import org.apache.http.auth.InvalidCredentialsException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import javax.servlet.http.HttpServletRequest;
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
    public HttpStatus login(HttpServletRequest request, @RequestBody User userBody) throws ExecutionException, InterruptedException {
        User u;

        try {
            u = this.authService.login(userBody.getUsername(), userBody.getPassword());
            request.getSession().setAttribute("user", u);

            return HttpStatus.ACCEPTED;

        } catch (InvalidCredentialsException e) {
            return HttpStatus.NOT_ACCEPTABLE;
        }
    }

    @GetMapping("/isLoggedIn")
    public String isLoggedIn(HttpServletRequest request) throws ExecutionException, InterruptedException{
        User u = (User) request.getSession().getAttribute("user");
        if (u==null)
            return HttpStatus.TEMPORARY_REDIRECT.toString();
        else
            return u.getUsername();
    }
}
