 package com.jb.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jb.config.JwtProvider;
import com.jb.models.User;
import com.jb.repository.UserRepository;
import com.jb.request.LoginRequest;
import com.jb.response.AuthResponse;
import com.jb.service.CustomeUserDetailsService;
 

@RestController
@RequestMapping("/auth")
public class AuthController {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private CustomeUserDetailsService customeUserDetailsService;

	// to add data in database
	@PostMapping("/signup")
	public AuthResponse createUser(@RequestBody User user) throws Exception {

		User isExistsUser = userRepository.findByEmail(user.getEmail());

		if (isExistsUser != null) {
			throw new Exception("this email is already register with another account");
		}

		User newUser = new User();

		newUser.setFirstName(user.getFirstName());
		newUser.setLastName(user.getLastName());
		newUser.setEmail(user.getEmail());
		newUser.setPassword(passwordEncoder.encode(user.getPassword()));
		newUser.setGender(user.getGender());
		newUser.setFollowers(new ArrayList<>(user.getFollowers()));
		newUser.setFollowings(new ArrayList<>(user.getFollowings()));

		User savedUser = userRepository.save(newUser);

		Authentication authentication = authenticate(savedUser.getEmail(),
				user.getPassword());

		String token = JwtProvider.generateToken(authentication);

		AuthResponse res = new AuthResponse(token, "Register Sucessfully.");
		return res;
	}

	@PostMapping("/signin")
	public AuthResponse signin(@RequestBody LoginRequest loginRequest) {

		Authentication authentication = authenticate(loginRequest.getEmail(), loginRequest.getPassword());
		String token = JwtProvider.generateToken(authentication);

		AuthResponse res = new AuthResponse(token, "Login Sucessfully.");
		return res;
	}

	
	private Authentication authenticate(String email, String password) {
		UserDetails userDetails = customeUserDetailsService.loadUserByUsername(email);

		if (userDetails == null) {
			throw new BadCredentialsException("Invalid username.");
		}

		if (!passwordEncoder.matches(password, userDetails.getPassword())) {
			throw new BadCredentialsException("Invalid Password.");
		}
		return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());

	}

}
