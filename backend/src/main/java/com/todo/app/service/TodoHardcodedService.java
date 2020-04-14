package com.todo.app.service;

import com.todo.app.model.Todo;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.LinkedList;
import java.util.List;

@Service
public class TodoHardcodedService {

    private static final List<Todo> todos = new LinkedList<>();
    private static int counter = 0;

    static {
        todos.add(new Todo(++counter, "Dima", "Learn Angular", LocalDate.now(), false));
        todos.add(new Todo(++counter, "Dima", "Learn Algorithms", LocalDate.now(), false));
        todos.add(new Todo(++counter, "Dima", "Visit London", LocalDate.now(), false));
    }

    public List<Todo> getTodos() {
        return todos;
    }

    public void deleteTodo(Integer id) {
        Todo todo = getTodoById(id);
        todos.remove(todo);
    }

    public Todo getTodoById(Integer id) {
        return todos.stream()
                .filter(t -> id.equals(t.getId()))
                .findFirst()
                .orElseThrow(() -> new RuntimeException(String.format("Todo with id '%s' is not found", id)));
    }

    public Todo saveTodo(Todo todo) {
        Integer id = todo.getId();
        if(id == null || id == 0){
            todo.setId(++counter);
        } else{
            try {
                deleteTodo(id);
            } catch (RuntimeException e){}
        }
        todos.add(todo);
        return todo;
    }
}
