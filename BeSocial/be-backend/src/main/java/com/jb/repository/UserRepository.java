package com.jb.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jb.models.User;

public interface UserRepository extends JpaRepository<User, Integer>{

}
