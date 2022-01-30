package com.dians_project.mapedonija.authentication.service.implementation;

import com.dians_project.mapedonija.authentication.model.User;
import com.dians_project.mapedonija.authentication.repository.UserRepository;
import com.dians_project.mapedonija.authentication.service.AuthService;
import org.apache.http.auth.InvalidCredentialsException;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.concurrent.ExecutionException;

@Service
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;

    public AuthServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User login(String username, String password) throws InvalidCredentialsException, ExecutionException, InterruptedException {
        if (username == null || username.isEmpty() || password == null || password.isEmpty() ) {
            throw new InvalidCredentialsException();
        }

        List<User> users = this.userRepository.listAll();
        return users
                .stream()
                .filter(i -> i.getUsername().equals(username) && i.getPassword().equals(password))
                .findFirst()
                .orElseThrow(InvalidCredentialsException::new);
    }
}
