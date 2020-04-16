package com.todo.app.service;

import com.todo.app.entity.Role;
import com.todo.app.entity.User;
import com.todo.app.model.RegistrationModel;
import com.todo.app.repository.RoleRepository;
import com.todo.app.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {


    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    public void registerUser(RegistrationModel registrationModel) {
        createUser(registrationModel);
        assignRole(registrationModel);
    }

    private void createUser(RegistrationModel registrationModel) {
        User user = new User();
        user.setUsername(registrationModel.getUsername());
        user.setPassword(passwordEncoder.encode(registrationModel.getPassword()));
        user.setEnabled(true);
        userRepository.save(user);
    }

    private void assignRole(RegistrationModel registrationModel) {
        Role role = new Role();
        role.setUsername(registrationModel.getUsername());
        role.setRole("ROLE_USER");
        roleRepository.save(role);
    }
}
