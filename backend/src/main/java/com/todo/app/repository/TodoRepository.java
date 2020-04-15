package com.todo.app.repository;

import com.todo.app.entity.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface TodoRepository extends JpaRepository<Todo, Integer> {

    List<Todo> findByUser(String user);

    Optional<Todo> findByIdAndUser(Integer id, String user);
}
