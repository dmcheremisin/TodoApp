package com.todo.app.service;

import com.todo.app.entity.Todo;
import com.todo.app.repository.TodoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TodoService {

    private final TodoRepository todoRepository;

    public List<Todo> getTodos(String user) {
        return todoRepository.findByUser(user);
    }

    public void deleteTodo(Integer id) {
        todoRepository.deleteById(id);
    }

    public Todo getTodoByIdAndUser(Integer id, String username) {
        return todoRepository.findByIdAndUser(id, username)
                .orElseThrow(() -> new RuntimeException(String.format("Todo with id '%s' is not found", id)));
    }

    public Todo saveTodo(Todo todo) {
        return todoRepository.save(todo);
    }

}
