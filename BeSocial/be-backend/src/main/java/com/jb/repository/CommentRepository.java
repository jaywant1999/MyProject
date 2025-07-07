package com.jb.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.jb.models.Comment;

public interface CommentRepository extends JpaRepository<Comment, Integer> {

	@Query("select c from Comment c where c.post.id=:postId")
	public List<Comment> findCommentByPostId(Integer postId);
}
