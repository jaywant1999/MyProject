package com.jb.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.jb.models.Chat;
import com.jb.models.User;
import com.jb.request.CreateChatRequest;
import com.jb.service.ChatService;
import com.jb.service.UserService;

@RestController
public class ChatController {
	
	@Autowired
	private ChatService chatService;
	
	@Autowired
	private UserService userService;

	@PostMapping("/api/chats")
	public Chat createChat(@RequestHeader("Authorization") String jwt,@RequestBody CreateChatRequest req) throws Exception {
		User reqUser = userService.findUserByJwt(jwt);
		User user2 = userService.findUserById(req.getUserId());
		Chat createdChat= chatService.createChat(reqUser, user2);
		
		return createdChat;
	}
	
	@GetMapping("/api/chats")
	public List<Chat> findUserChat(@RequestHeader("Authorization") String jwt){
		User reqUser = userService.findUserByJwt(jwt);

		List<Chat> chats = chatService.findUsersChat(reqUser.getId());
		
		return chats;
	}
}
