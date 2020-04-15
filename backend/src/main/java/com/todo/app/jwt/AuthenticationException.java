package com.todo.app.jwt;

public class AuthenticationException extends RuntimeException {

	public AuthenticationException(String message, Throwable cause) {
		super(message, cause);
	}

}