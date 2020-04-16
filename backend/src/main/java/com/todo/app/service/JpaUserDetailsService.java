package com.todo.app.service;

import com.todo.app.entity.Role;
import com.todo.app.entity.User;
import com.todo.app.repository.RoleRepository;
import com.todo.app.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class JpaUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        User user = userRepository.findByUsername(username)
                                  .orElseThrow(() -> new UsernameNotFoundException(username));

        List<Role> roles = roleRepository.findByUsername(username);

        Collection<? extends GrantedAuthority> authorities = mapRolesToAuthorities(roles);
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), authorities);
    }

    private static Collection<? extends GrantedAuthority> mapRolesToAuthorities(Collection<Role> roles) {
        return roles.stream()
                    .map(role -> new SimpleGrantedAuthority(role.getRole()))
                    .collect(Collectors.toList());
    }
}
