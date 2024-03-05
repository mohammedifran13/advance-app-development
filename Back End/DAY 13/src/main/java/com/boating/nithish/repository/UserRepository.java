package com.boating.nithish.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.boating.nithish.model.User;

public interface UserRepository extends JpaRepository<User, String> {

    Optional<User> findByEmail(String email);

}
