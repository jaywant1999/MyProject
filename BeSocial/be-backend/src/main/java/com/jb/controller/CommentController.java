package com.jb.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.jb.dto.CommentRequestDto;
import com.jb.models.Comment;
import com.jb.models.Post;
import com.jb.models.User;
import com.jb.response.ApiResponse;
import com.jb.service.CommentService;
import com.jb.service.UserService;

@RestController
public class CommentController{
	
	@Autowired
	CommentService commentService;
	
	@Autowired
	UserService userService;
	
	@PostMapping("/api/posts/{postId}/comment")
	public ResponseEntity<Comment>createComment(@RequestBody CommentRequestDto request, @PathVariable Integer postId, @RequestHeader ("Authorization")String jwt) throws Exception	{	
		
		User reqUser = userService.findUserByJwt(jwt);
		Comment createdComment = commentService.createComment( request.getCommentString(), postId, reqUser.getId());	
		
		return new ResponseEntity<>(createdComment,HttpStatus.CREATED);
		
	}
	
	@GetMapping("/api/posts/{postId}/comment")
	public ResponseEntity<List<Comment>> getCommentByPost(@PathVariable Integer postId){
		
		List<Comment> comment = commentService.getCommentById(postId);
		
		return new ResponseEntity<>(comment,HttpStatus.ACCEPTED);
		
	}
	
	@DeleteMapping("/api/posts/comment/{commentId}")
	public ResponseEntity<ApiResponse> deleteComment(@RequestHeader ("Authorization")String jwt, @PathVariable Integer commentId)throws Exception{
		
		User reqUser = userService.findUserByJwt(jwt); 
		String msg= commentService.deleteComment(commentId, reqUser.getId());
	    ApiResponse res= new ApiResponse(msg, true);
		
		return new ResponseEntity<ApiResponse>(res,HttpStatus.OK);	
	} 
	
	@PutMapping("/api/comment/like/{commentId}")
	public ResponseEntity<Comment>	likedCommentHandler(@PathVariable Integer commentId, @RequestHeader ("Authorization")String jwt)throws Exception{
		
		User reqUser = userService.findUserByJwt(jwt);
		
		 Comment comment = commentService.likedComment(commentId, reqUser.getId());
		 
		return new ResponseEntity<Comment>(comment,HttpStatus.ACCEPTED);
	}
	
	}
