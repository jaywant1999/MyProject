package com.jb.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.jb.models.Story;
import com.jb.models.User;
import com.jb.service.StoryService;
import com.jb.service.UserService;
 

@RestController
public class StoryController {

	@Autowired
	private StoryService storyService;
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/api/story")
	public Story createStory(@RequestBody Story story,@RequestHeader("Authorization") String jwt ) {
		
		User reqUser = userService.findUserByJwt(jwt);
		
		Story createdstory = storyService.createStory(story, reqUser);
		
		return createdstory;
	}
	
	
	@GetMapping("/api/story/user/{userId}")
	public List<Story> findUserStory(@PathVariable Integer userId,@RequestHeader("Authorization") String jwt ) throws Exception {
		
		User reqUser = userService.findUserByJwt(jwt);
		
		List<Story> createdstory = storyService.findStoryByUserId(userId);
		
		return createdstory;
	}
}
