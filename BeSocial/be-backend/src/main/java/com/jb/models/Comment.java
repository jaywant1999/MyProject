package com.jb.models;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;

@Entity
public class Comment {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	@Column(nullable = false)
	private String commentString;
	
	@Column(nullable = false)
	private LocalDateTime timestamp;
	
	@ManyToOne
	@JoinColumn(nullable = false)
	private User user;	
	
	@ManyToOne
	@JoinColumn(nullable = false)
	@JsonIgnore
	private Post post;
	
	@ManyToMany
	private List<User> liked = new ArrayList<>();
	
	public Comment () {
		
	}


	public Comment(Integer id, String commentString, LocalDateTime timestamp, User user, Post post, List<User> liked) {
		super();
		this.id = id;
		this.commentString = commentString;
		this.timestamp = timestamp;
		this.user = user;
		this.post = post;
		this.liked = liked;
	}





	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public String getCommentString() {
		return commentString;
	}


	public void setCommentString(String commentString) {
		this.commentString = commentString;
	}


	public LocalDateTime getTimestamp() {
		return timestamp;
	}


	public void setTimestamp(LocalDateTime timestamp) {
		this.timestamp = timestamp;
	}


	public User getUser() {
		return user;
	}


	public void setUser(User user) {
		this.user = user;
	}


	public Post getPost() {
		return post;
	}


	public void setPost(Post post) {
		this.post = post;
	}

 

	public List<User> getLiked() {
		return liked;
	}
 

	public void setLiked(List<User> liked) {
		this.liked = liked;
	}	
	
}
