package com.todo.app.repository;

import com.todo.app.entity.Role;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface RoleRepository extends CrudRepository<Role, Integer> {

    List<Role> findByEmail(String email);
}
