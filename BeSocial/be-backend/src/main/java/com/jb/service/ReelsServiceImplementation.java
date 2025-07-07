package com.jb.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jb.models.Reels;
import com.jb.models.User;
import com.jb.repository.ReelsRepository;

@Service
public class ReelsServiceImplementation implements ReelsService{

	@Autowired
	private ReelsRepository reelsRepository;
	
	@Autowired
	private UserService userService;
	
	@Override
	public Reels createReel(Reels reel, User user) {
		 Reels createReels = new Reels();
		 
		 createReels.setTitle(reel.getTitle());
		 createReels.setUser(user);
		 createReels.setVideo(reel.getVideo());
		return reelsRepository.save(createReels);
	}

	@Override
	public List<Reels> findAllReels() {
		 
		return reelsRepository.findAll();
	}

	@Override
	public List<Reels> findUsersReel(Integer userId) throws Exception {
		 userService.findUserById(userId);
		return reelsRepository.findByUserId(userId);
	}

}
