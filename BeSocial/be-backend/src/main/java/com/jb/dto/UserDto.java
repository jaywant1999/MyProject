package com.jb.dto;

import java.util.List;
import java.util.stream.Collectors;

import com.jb.models.User;

import lombok.Data;

@Data
public class UserDto {
    private Integer id;
    private String firstName;
    private String lastName;
    private String email;
    private String gender;
    private List<Integer> followers;
    private List<Integer> followings;
    private List<Integer> savedPostIds;

    public UserDto() {
    	
    }   
    
    
    public UserDto(User user) {
        this.id = user.getId();
        this.firstName = user.getFirstName();
        this.lastName = user.getLastName();
        this.email = user.getEmail();
        this.gender = user.getGender();
        this.followers = user.getFollowers();
        this.followings = user.getFollowings();
        this.savedPostIds = user.getSavedPost()
            .stream()
            .map(post -> post.getId())
            .collect(Collectors.toList());
    }

    
}
