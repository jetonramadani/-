package com.dians_project.mapedonija.authentication.controller;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;


@RestController
@RequestMapping("/logout")
public class LogoutController {

    @PostMapping
    public HttpStatus logout(HttpServletRequest request) {
        request.getSession().invalidate();
        return HttpStatus.ACCEPTED;
    }
}
