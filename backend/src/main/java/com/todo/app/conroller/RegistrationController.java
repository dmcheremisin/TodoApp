package com.todo.app.conroller;

import com.todo.app.model.RegistrationModel;
import com.todo.app.model.WelcomeModel;
import com.todo.app.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/register")
@RequiredArgsConstructor
@Validated
public class RegistrationController {

    private final UserService userService;

    @PostMapping
    public WelcomeModel registerUser(@RequestBody @Valid RegistrationModel registrationModel) {
        userService.registerUser(registrationModel);
        return new WelcomeModel("Registration is successful");
    }
}
