package com.jb.service;

import java.util.List;

import com.jb.models.Message;
import com.jb.models.User;

public interface MessageService {
	public Message createMessage(User user, Integer chatId, Message reqmsg) throws Exception;
	
	public List<Message> findChatsMessages(Integer chatId) throws Exception;

}
