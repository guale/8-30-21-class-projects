package com.tts.TTTwitter.service;

import com.tts.TTTwitter.model.User;

import java.util.List;

public interface UserService {

	User findByUsername(String username);
	List<User> findAll();
	void save(User user);
	User saveNewUser(User user);
	User getLoggedInUser();

}
