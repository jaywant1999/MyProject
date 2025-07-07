package com.jb.models;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Entity
@Data  			//to invoke getter setter methods
public class Story {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	private String image;
	
	@ManyToOne
	private User user;
	
	private String caption;
	
	private LocalDateTime timestamp;
}
