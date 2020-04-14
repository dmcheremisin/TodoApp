package com.todo.app.conroller;

import com.todo.app.model.AuthenticationModel;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("http://localhost:4200")
@RestController
public class BasicAuthController {

    @GetMapping("/auth")
    public AuthenticationModel getWelcomeModel() {
        AuthenticationModel authenticationModel = new AuthenticationModel();
        authenticationModel.setMessage("You are authenticated");
        return authenticationModel;
    }
}
