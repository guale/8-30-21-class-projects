package com.tts.TTTwitter.service;

import com.tts.TTTwitter.model.Role;
import com.tts.TTTwitter.model.User;
import com.tts.TTTwitter.repository.RoleRepository;
import com.tts.TTTwitter.repository.UserRepository;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {

	private UserRepository userRepository;
	private RoleRepository roleRepository;
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	public UserServiceImpl(
			UserRepository userRepository,
			RoleRepository roleRepository,
			BCryptPasswordEncoder bCryptPasswordEncoder){
		this.userRepository = userRepository;
		this.roleRepository = roleRepository;
		this.bCryptPasswordEncoder = bCryptPasswordEncoder;
	}

	@Override
	public User findByUsername(String username) {
		return userRepository.findByUsername(username);
	}

	@Override
	public List<User> findAll() {
		return (List<User>) userRepository.findAll();
	}

	@Override
	public void save(User user) {
		userRepository.save(user);

	}

	@Override
	public User saveNewUser(User user) {
		user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
		user.setActive(1);
		Role userRole = roleRepository.findByRole("USER");
		user.setRoles(new HashSet<>(List.of(userRole)));
		return userRepository.save(user);
	}

	@Override
	public User getLoggedInUser() {
		String loggedInUsername = SecurityContextHolder
				.getContext()
				.getAuthentication()
				.getName();
		return findByUsername(loggedInUsername);
	}

}
