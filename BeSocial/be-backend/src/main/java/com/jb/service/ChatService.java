package com.jb.service;

import java.util.List;

import com.jb.models.Chat;
import com.jb.models.User;

public interface ChatService {

	public Chat createChat(User reqUser, User user2	) ;
	
	public Chat findChatById(Integer chatId) throws Exception;
	
	public List<Chat> findUsersChat(Integer userId);
}
