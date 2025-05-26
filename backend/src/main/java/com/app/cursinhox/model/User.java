package com.app.cursinhox.model;

import java.util.Date;

import com.app.cursinhox.dto.UserDTO;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "users")
@Getter
@Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false, unique = true)
    private long ra;

    @Column(nullable = false, unique = true)
    private String email;
    
    @Column(nullable = true)
    private String username;

    @Column(nullable = true)
    private String firstName;

    @Column(nullable = true)
    private Date birthDate;
    
    @Column(nullable = false)
    private boolean active;

    @Column(nullable = false)
    private boolean admin;

    @Column(nullable = false)
    private int classId;

    public UserDTO convertToDTO() {
        UserDTO userDTO = new UserDTO();
        userDTO.setRa(this.getRa());
        userDTO.setEmail(this.getEmail());
        userDTO.setUsername(this.getUsername());
        userDTO.setFirstName(this.getFirstName());
        userDTO.setBirthDate(this.getBirthDate());
        userDTO.setActive(this.isActive());
        userDTO.setAdmin(this.isAdmin());
        userDTO.setClassId(this.getClassId());
        return userDTO;
    }
}