package com.todo.app.conroller;

import com.todo.app.model.Todo;
import com.todo.app.service.TodoHardcodedService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin("http://localhost:4200")
@RestController
@RequiredArgsConstructor
@RequestMapping("/users/{username}/todos")
public class TodoController {

    private final TodoHardcodedService todoHardcodedService;

    @GetMapping
    public List<Todo> getUserTodos(@PathVariable String username) {
        return todoHardcodedService.getTodos();
    }

    @GetMapping("/{id}")
    public Todo getTodo(@PathVariable String username, @PathVariable Integer id) {
        return todoHardcodedService.getTodoById(id);
    }

    @PostMapping
    public ResponseEntity<Void> createTodo(@PathVariable String username, @RequestBody Todo todo) {
        todo.setId(null);
        Todo createdTodo = todoHardcodedService.saveTodo(todo);

        URI uri = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(createdTodo.getId())
                .toUri();

        return ResponseEntity.created(uri).build();
    }

    @PutMapping("/{id}")
    public Todo updateTodo(@PathVariable String username, @PathVariable Integer id, @RequestBody Todo todo) {
        todo.setId(id);
        return todoHardcodedService.saveTodo(todo);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    public void deleteTodo(@PathVariable String username, @PathVariable Integer id) {
        todoHardcodedService.deleteTodo(id);
    }
}
