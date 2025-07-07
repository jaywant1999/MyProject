package com.jb.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.jb.dto.UserDto;
import com.jb.models.User;
import com.jb.repository.UserRepository;
import com.jb.service.UserService;

@RestController
public class UserController {

	@Autowired
	UserRepository userRepository;	
	
	@Autowired
	UserService userService;

	// to get all the data from database
	@GetMapping("/api/users")
	public List<User> getUsers() {

		List<User> users = userRepository.findAll();

		return users;
	}

	// to get single data by id
	@GetMapping("/api/user")
	public User getUsersById(@RequestHeader ("Authorization")String jwt) throws Exception {

		User reqUser = userService.findUserByJwt(jwt);
		User user = userService.findUserById(reqUser.getId());
		 return user;	 
	}

	//Updating data 
	@PutMapping("/api/users")
	public User updateUser(@RequestHeader ("Authorization")String jwt,@RequestBody User user) throws Exception {

		User reqUser = userService.findUserByJwt(jwt);
		User updatedUser = userService.updateUser(user, reqUser.getId());
		return updatedUser;
	}

	@PutMapping("/api/users/follow/{userId2}")
	public User followUserHandler(@RequestHeader ("Authorization")String jwt, @PathVariable Integer userId2) throws Exception {
		User reqUser = userService.findUserByJwt(jwt);	
		User user = userService.followUser(reqUser.getId(), userId2);
		return user;
	}
	
	@GetMapping("/api/users/search")
	public List<User> searchUser(@Param("query") String query){
		List<User> users = userService.searchUser(query);
		return users;
		
	}
	
	@GetMapping("/api/users/profile")
	public User getUserFromToken(@RequestHeader ("Authorization")String jwt) {
		
		User user = userService.findUserByJwt(jwt);	
		user.setPassword(null);
		return user;
	}
	
	}
