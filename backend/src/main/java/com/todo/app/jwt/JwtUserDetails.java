package com.todo.app.jwt;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class JwtUserDetails implements UserDetails {

	private static final long serialVersionUID = 5155720064139820502L;

	private final Long id;
	private final String username;
	private final String password;
	private final Collection<? extends GrantedAuthority> authorities;

	public JwtUserDetails(Long id, String username, String password, String role) {
		this.id = id;
		this.username = username;
		this.password = password;

		List<SimpleGrantedAuthority> authorities = new ArrayList<>();
		authorities.add(new SimpleGrantedAuthority(role));

		this.authorities = authorities;
	}

	public Long getId() {
		return id;
	}

	@Override
	public String getUsername() {
		return username;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public String getPassword() {
		return password;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

}