package com.jb.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.jb.models.Message;
import com.jb.models.User; 
import com.jb.service.MessageService;
import com.jb.service.UserService;

@RestController
public class MessageController {

	@Autowired
	private MessageService messageService;
	
	@Autowired
	private UserService userService;

	
	@PostMapping("/api/messages/chat/{chatId}")
	public Message createMssage(@RequestHeader("Authorization") String jwt,@PathVariable Integer chatId,@RequestBody Message msg) throws Exception {
		User user = userService.findUserByJwt(jwt);
		
		Message message = messageService.createMessage(user, chatId, msg);
		
		return message;
	}
	
	@GetMapping("/api/messages/chat/{chatId}")
	public List<Message> getChatsMessage(@PathVariable Integer chatId ) throws Exception{
		
		
		return messageService.findChatsMessages(chatId);
	}
}
