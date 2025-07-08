package com.jb.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jb.models.Chat;
import com.jb.models.Message;
import com.jb.models.User;
import com.jb.repository.ChatRepository;
import com.jb.repository.MessageRepository;

@Service
public class MessageServiceImplementation implements MessageService {

	@Autowired
	private MessageRepository messageRepository;
	
	@Autowired
	private ChatService chatService;
	
	@Autowired
	private ChatRepository chatRepository;
	
	@Override
	public Message createMessage(User user, Integer chatId, Message reqmsg) throws Exception {
		 
		Chat reqchat = chatService.findChatById(chatId);
		Message newmsg = new Message();
		
		newmsg.setChat(reqchat);
		newmsg.setContent(reqmsg.getContent());
		newmsg.setImage(reqmsg.getImage());
		newmsg.setUser(user);
		newmsg.setTimestamp(LocalDateTime.now());
		
		Message savedMessage = messageRepository.save(newmsg);
		
		reqchat.getMessages().add(savedMessage);
		chatRepository.save(reqchat);
		
		return savedMessage;
	}

	@Override
	public List<Message> findChatsMessages(Integer chatId) throws Exception {
		Chat reqchat = chatService.findChatById(chatId);
		
		return messageRepository.findByChatId(chatId);
	}

}
