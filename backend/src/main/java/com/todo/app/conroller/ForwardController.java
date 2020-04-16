package com.todo.app.conroller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ForwardController {

    @GetMapping(value = {"/login", "/logout", "/register", "/welcome", "/welcome/*", "/todos", "/todos/*"})
    public String frontend() {
        return "forward:/";
    }
}
