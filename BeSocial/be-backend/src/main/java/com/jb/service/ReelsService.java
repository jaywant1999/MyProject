package com.jb.service;

import java.util.List;

import com.jb.models.Reels;
import com.jb.models.User;

public interface ReelsService {

	public Reels createReel(Reels reel, User user);
	
	public List<Reels> findAllReels();
	
	public List<Reels> findUsersReel(Integer userId) throws Exception;
}
