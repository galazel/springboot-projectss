package com.registration.registration.model;

import org.hibernate.validator.constraints.Normalized;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Data;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "students")
public class Student 
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank(message = "Name is empty")
    @NotEmpty(message = "Name is empty")
    private String name;
    @NotEmpty(message = "ID number is empty")
    @Pattern(regexp = "\\d{8}", message = "ID Number should be at least 8 digits")
    private String idNumber;
    @NotBlank(message = "Program is required")
    private String program;
    @NotBlank(message = "Profile is required")
    private String profile;
    
}
