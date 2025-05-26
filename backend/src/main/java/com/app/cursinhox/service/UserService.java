package com.app.cursinhox.service;

import com.app.cursinhox.dto.*;
import com.app.cursinhox.model.*;
import com.app.cursinhox.repository.*;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;
    
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    
    public UserDTO createUser(long ra) {
        User user = new User();
        user.setRa(ra);
        user.setActive(true);
        
        User savedUser = userRepository.save(user);
        return savedUser.convertToDTO();
    }

    public List<UserDTO> getAllUsers(){
        return userRepository.findAll().stream()
        .map((user) -> user.convertToDTO())
        .collect(Collectors.toList());
    }

    public boolean emailAlreadyUsed(String email){
        return !userRepository.findByEmail(email).isEmpty();
    }
}