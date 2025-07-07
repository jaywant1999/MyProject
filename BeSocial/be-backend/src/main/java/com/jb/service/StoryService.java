package com.jb.service;

import java.util.List;

import com.jb.models.Story;
import com.jb.models.User;

public interface StoryService {

	public Story createStory(Story story, User user);
	
	public List<Story> findStoryByUserId(Integer userIOd) throws Exception;
	
}
