package com.jb.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.jb.models.User;
import com.jb.repository.UserRepository;

@RestController
public class UserController {

	@Autowired
	UserRepository userRepository;

	// to add data in database
	@PostMapping("/users")
	public User createUser(@RequestBody User user) {

		User newUser = new User();

		newUser.setId(user.getId());
		newUser.setFirstName(user.getFirstName());
		newUser.setLastName(user.getLastName());
		newUser.setEmail(user.getEmail());
		newUser.setPassword(user.getPassword());

		User savedUser = userRepository.save(newUser);

		return savedUser;
	}

	// to get all the data from database
	@GetMapping("/users")
	public List<User> getUsers() {

		List<User> users = userRepository.findAll();

		return users;
	}

	// to get single data by id
	@GetMapping("/user/{userId}")
	public User getUsersById(@PathVariable("userId") Integer id) throws Exception {

		Optional<User> user = userRepository.findById(id);
		if (user.isPresent()) {
			return user.get();
		}
		throw new Exception("User not exists with userid " + id);
	}

	//Updating data 
	@PutMapping("/user/{userId}")
	public User updateUser(@RequestBody User user, @PathVariable Integer userId) throws Exception {

		Optional<User> user1 = userRepository.findById(userId);

		if (user1.isEmpty()) {
			throw new Exception("User not exists with userid " + userId);
		}

		User oldUser = user1.get();

		if (user.getFirstName() != null) {
			oldUser.setFirstName(user.getFirstName());
		}

		if (user.getLastName() != null) {
			oldUser.setLastName(user.getLastName());
		}

		if (user.getEmail() != null) {
			oldUser.setEmail(user.getEmail());
		}

		if (user.getPassword() != null) {
			oldUser.setPassword(user.getPassword());
		}

		User updatedUser = userRepository.save(oldUser);

		return updatedUser;
	}

	
	//Deleting data from database
	@DeleteMapping("/user/{userId}")
	public String deleteUser(@PathVariable Integer userId) throws Exception {

		Optional<User> user1 = userRepository.findById(userId);

		if (user1.isEmpty()) {
			throw new Exception("User not exists with userid " + userId);
		}
		userRepository.deleteById(userId);
		
		return "User deleted successfuly with id " + userId;

	}
}
