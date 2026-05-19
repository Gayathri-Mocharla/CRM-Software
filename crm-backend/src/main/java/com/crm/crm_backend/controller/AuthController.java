package com.crm.crm_backend.controller;

import com.crm.crm_backend.dto.LoginRequest;
import com.crm.crm_backend.dto.RegisterRequest;
import com.crm.crm_backend.model.User;
import com.crm.crm_backend.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*")
public class AuthController {

  @Autowired
  private UserRepository userRepository;

  @PostMapping("/register")
  public String registerUser(
      @RequestBody RegisterRequest request) {

    User user = new User();

    user.setFullName(request.getFullName());
    user.setEmail(request.getEmail());
    user.setPassword(request.getPassword());
    user.setRole("USER");

    userRepository.save(user);

    return "User Registered Successfully";
  }

  @PostMapping("/login")
  public String loginUser(
      @RequestBody LoginRequest request) {

    Optional<User> userOptional = userRepository.findByEmail(request.getEmail());

    if (userOptional.isEmpty()) {
      return "User Not Found";
    }

    User user = userOptional.get();

    if (!user.getPassword()
        .equals(request.getPassword())) {

      return "Invalid Password";
    }

    return "Login Successful";
  }
}