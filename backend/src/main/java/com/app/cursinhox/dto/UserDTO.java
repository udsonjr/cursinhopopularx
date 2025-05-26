package com.app.cursinhox.dto;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDTO {
    private long ra;
    private String email;
    private String username;
    private String firstName;
    private Date birthDate;
    private boolean active;
    private boolean admin;
    private int classId;
}