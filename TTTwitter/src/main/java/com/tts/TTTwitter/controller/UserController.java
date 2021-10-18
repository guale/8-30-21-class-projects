package com.tts.TTTwitter.controller;

import com.tts.TTTwitter.model.User;
import com.tts.TTTwitter.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class UserController {

	private UserService userService;
	private TweetService tweetService;

	public UserController(UserService userService, TweetService tweetService) {
		this.userService = userService;
		this.tweetService = tweetService;
	}

	@GetMapping("/users/{username}")
	public String getUser(@PathVariable String username, Model model) {

		User user = userService.findByUsername(username);
		List<Tweet> tweets = tweetService.findAllByUser(user);
		model.addAttribute("tweetList", tweets);
		model.addAttribute("user", user);

	}

}
