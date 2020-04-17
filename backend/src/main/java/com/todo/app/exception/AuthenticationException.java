package com.todo.app.exception;

public class AuthenticationException extends RuntimeException {

	public AuthenticationException(String message, Throwable cause) {
		super(message, cause);
	}

}