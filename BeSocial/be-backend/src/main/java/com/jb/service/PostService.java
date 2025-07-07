package com.jb.service;

import java.util.List;

import com.jb.models.Post;

public interface PostService {
	
    Post createNewPost(Post post, Integer userId)throws Exception;
	
	String deletePost(Integer postId, Integer userId) throws Exception;
	
	Post findPostById(Integer postId) throws Exception;
	
	List<Post> findPostByUserId(Integer userId);
	
	List<Post> findAllPost();
	
	Post savePost(Integer postId, Integer userId) throws Exception;
	
	Post likePost(Integer postId, Integer userId) throws Exception;

}
