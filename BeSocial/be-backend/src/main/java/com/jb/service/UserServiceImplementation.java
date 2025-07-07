package com.jb.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jb.config.JwtProvider;
import com.jb.models.User;
import com.jb.repository.UserRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class UserServiceImplementation implements UserService {

	@Autowired
	UserRepository userRepository;

	UserService userService;

	@Override
	public User registerUser(User user) throws Exception {
		
		User existingUser = userRepository.findByEmail(user.getEmail());

		if (existingUser != null) {
	        throw new Exception("User with this email already exists");
	    }
	    
		User newUser = new User();
 
		newUser.setFirstName(user.getFirstName());
		newUser.setLastName(user.getLastName());
		newUser.setEmail(user.getEmail());
		newUser.setPassword(user.getPassword());
		newUser.setGender(user.getGender());
		
		User savedUser = userRepository.save(newUser);
		return savedUser;
	}

	@Override
	public User findUserById(Integer userId) throws Exception {
		
		Optional<User> user = userRepository.findById(userId);
		if (user.isPresent()) {
			return user.get();
		}
		throw new Exception("User not exists with userid " + userId);

	}

	@Override
	public User findUserByEmail(String email) {
		  User user=  userRepository.findByEmail(email);			 
				 return user;
	}

	@Override
	public User followUser(Integer reqUserId, Integer userId2) throws Exception {
		
		User reqUser = findUserById(reqUserId);
		User user2 = findUserById(userId2);
		
		user2.getFollowers().add(reqUser.getId());
		reqUser.getFollowings().add(user2.getId());
		
		userRepository.save(reqUser);

		userRepository.save(user2);
		
		return reqUser;
	}

	@Override
	public User updateUser(User user, Integer userId) throws Exception {
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
		
		if (user.getGender() != null) {
			oldUser.setGender(user.getGender());
		}
		
		if (user.getFollowers() != null) {
			oldUser.setFollowers(user.getFollowers());
		}
		
		if (user.getFollowings() != null) {
			oldUser.setFollowings(user.getFollowings());
		}

		User updatedUser = userRepository.save(oldUser);

		return updatedUser;
	}
	

	@Override
	public List<User> searchUser(String query) {
 
		return userRepository.searchUser(query);
		
	}

	@Override
	public User findUserByJwt(String jwt) {
		String email = JwtProvider.getEmailFromJwtToken(jwt);
		
		User user = userRepository.findByEmail(email);
		
		return user;
	}

}
