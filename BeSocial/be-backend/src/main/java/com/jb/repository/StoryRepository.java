package com.jb.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jb.models.Story;
import com.jb.models.User;

public interface StoryRepository extends JpaRepository<Story, Integer>{
		
	public List<Story> findByUserId(Integer userId);
}
