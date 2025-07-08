package com.jb.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
 
import com.jb.models.Comment;
import com.jb.models.Post;
import com.jb.models.User;
import com.jb.repository.CommentRepository;
import com.jb.repository.PostRepository;
import com.jb.repository.UserRepository;

@Service
public class CommentServiceImplementation implements CommentService{
	
	@Autowired
	CommentRepository commentRepository;
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	UserService userService;
	
	@Autowired
	PostRepository postRepository;	
	
	@Autowired
	PostService postService;
	
	
	@Override
	public Comment createComment(String commentString, Integer postId, Integer userId) throws Exception {
		
		Post post = postService.findPostById(postId);
		
		User user = userService.findUserById(userId);				
		
		Comment newComment = new Comment();
		
				
		newComment.setCommentString(commentString);

		newComment.setPost(post);
		
		newComment.setUser(user);
		
		newComment.setTimestamp(LocalDateTime.now());		
		
		Comment savedComment = commentRepository.save(newComment);
		
		post.getComments().add(newComment);			
		
		postRepository.save(post);
		
		return savedComment;
				
	}

	@Override
	public List<Comment> getCommentById(Integer postId) {
		
		return commentRepository.findCommentByPostId(postId);
		
	}

	@Override
	public String deleteComment(Integer commentId, Integer userId) throws Exception {
		  Optional<Comment>  optComments = commentRepository.findById(commentId);
		  
		  if (optComments.isEmpty()) {
		        return "Comment not found";
		    }
		  
		  Comment comment = optComments.get();
		  
		 if (!comment.getUser().getId().equals(userId)) {
	            throw new Exception("Unauthorized to delete this comment");
	        }
		  
		 commentRepository.delete(comment);		 
		 return "Comment deleted successfully";
	}

	@Override
	public Comment likedComment(Integer commentId, Integer userId) throws Exception {
			Comment comment = findCommentById(commentId);
			User user = userService.findUserById(userId);
			
			if(!comment.getLiked().contains(user)) {
				comment.getLiked().add(user);
			}	
			else {
				comment.getLiked().remove(user);
			}
		return commentRepository.save(comment);
	}

	@Override
	public Comment findCommentById(Integer commentId) throws Exception {
		 Optional <Comment> opt = commentRepository.findById(commentId);
		 
		 if(opt.isEmpty()) {
			 throw new Exception("comment not exists.");
		 }
		return opt.get();
	}

}
