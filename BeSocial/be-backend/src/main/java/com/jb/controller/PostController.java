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

import com.jb.models.Post;
import com.jb.models.User;
import com.jb.response.ApiResponse;
import com.jb.service.PostService;
import com.jb.service.UserService;

@RestController
public class PostController {

	@Autowired
	PostService postService;
	
	@Autowired
	UserService userService;
	
	@PostMapping("/api/posts/user")
	public ResponseEntity<Post> createPost(@RequestBody Post post,@RequestHeader ("Authorization")String jwt) throws Exception {

		User reqUser = userService.findUserByJwt(jwt);
		Post createdPost = postService.createNewPost(post, reqUser.getId());
		
        return new ResponseEntity<>(createdPost, HttpStatus.CREATED);
    }
	
	
	@DeleteMapping("/posts/{postId}")
	public ResponseEntity<ApiResponse> deletePost(@RequestHeader ("Authorization")String jwt,@PathVariable Integer postId) throws Exception{
		
		User reqUser = userService.findUserByJwt(jwt);
		String message = postService.deletePost(postId, reqUser.getId());
		ApiResponse res= new ApiResponse(message, true);
		
		return new ResponseEntity<ApiResponse>(res,HttpStatus.OK);			
	}
	
	@GetMapping("/posts/{postId}")
	public ResponseEntity<Post>	findPostByIdHandler(@PathVariable Integer postId) throws Exception{
		Post post =postService.findPostById(postId);
		
		return new ResponseEntity<Post>(post,HttpStatus.ACCEPTED);
	}
	
	@GetMapping("/posts/user")
	public ResponseEntity<List<Post>> findUsersPost(@RequestHeader ("Authorization")String jwt){
		
		User reqUser = userService.findUserByJwt(jwt);
		List<Post> posts = postService.findPostByUserId(reqUser.getId());
		
		return new ResponseEntity<List<Post>>(posts, HttpStatus.ACCEPTED);		
		
	}
	
	@GetMapping("/posts")
	public ResponseEntity<List<Post>> findAllPost(){
		
		List<Post> posts = postService.findAllPost();
		return new ResponseEntity<List<Post>>(posts, HttpStatus.ACCEPTED);		
		
	}

	@PutMapping("/posts/save/{postId}")
	public ResponseEntity<Post>	savedPostHandler(@PathVariable Integer postId, @RequestHeader ("Authorization")String jwt)throws Exception{
		User reqUser = userService.findUserByJwt(jwt);
		Post post =postService.savePost(postId, reqUser.getId());		
		return new ResponseEntity<Post>(post,HttpStatus.ACCEPTED);
	}
	
	@PutMapping("/posts/like/{postId}")
	public ResponseEntity<Post>	likePostHandler(@PathVariable Integer postId, @RequestHeader ("Authorization")String jwt)throws Exception{
		
		User reqUser = userService.findUserByJwt(jwt);
		Post post =postService. likePost(postId, reqUser.getId());
		
		return new ResponseEntity<Post>(post,HttpStatus.ACCEPTED);
	}
	
	
	}