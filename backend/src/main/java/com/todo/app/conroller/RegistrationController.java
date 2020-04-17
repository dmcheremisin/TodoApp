package com.todo.app.conroller;

import com.todo.app.model.RegistrationModel;
import com.todo.app.model.WelcomeModel;
import com.todo.app.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

import static com.todo.app.util.RestConstants.REGISTER_URL;

@RestController
@RequiredArgsConstructor
@Validated
public class RegistrationController {

    private final UserService userService;

    @PostMapping(REGISTER_URL)
    public WelcomeModel registerUser(@RequestBody @Valid RegistrationModel registrationModel) {
        userService.registerUser(registrationModel);
        return new WelcomeModel("Registration is successful");
    }
}
