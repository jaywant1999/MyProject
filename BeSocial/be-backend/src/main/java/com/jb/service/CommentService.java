package com.jb.service;

import java.util.List;

import com.jb.models.Comment;

public interface CommentService {

	public Comment createComment(String commentString, Integer postId, Integer userId) throws Exception;
	
	public String deleteComment(Integer commentId, Integer userId) throws Exception;

	List<Comment> getCommentById(Integer postId);
	
	public Comment likedComment(Integer commentId,Integer userId ) throws Exception;
	
	public Comment findCommentById(Integer commentId) throws Exception;
}
