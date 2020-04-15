package com.todo.app.jwt;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class JwtInMemoryUserDetailsService implements UserDetailsService {

	static List<JwtUserDetails> inMemoryUserList = new ArrayList<>();

	static {
		inMemoryUserList.add(new JwtUserDetails(1L, "dima",
				"$2a$10$B.0xV52aBkWgWTABWqQ4D.t8FbLp2yrl/2V6QQxWsxzlziDAauVmC", "ROLE_ADMIN"));
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		return inMemoryUserList.stream()
				.filter(user -> user.getUsername().equals(username))
				.findFirst()
				.orElseThrow(() -> new UsernameNotFoundException(String.format("USER_NOT_FOUND '%s'.", username)));
	}

}