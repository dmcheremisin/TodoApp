package com.todo.app.conroller;

import com.todo.app.model.WelcomeModel;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import static com.todo.app.util.RestConstants.WELCOME_URL;

@RestController
public class WelcomeController {

    @GetMapping(WELCOME_URL)
    public WelcomeModel getWelcomeModel(@PathVariable String name) {
        WelcomeModel welcomeModel = new WelcomeModel();
        welcomeModel.setMessage(String.format("Hello, %s, from rest service", name));
        return welcomeModel;
    }
}
