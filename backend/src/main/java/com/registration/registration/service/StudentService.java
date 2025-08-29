package com.registration.registration.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.registration.registration.model.Student;
import com.registration.registration.repository.StudentRepository;

@Service
public class StudentService 
{
    private final StudentRepository repository;
    public StudentService(StudentRepository repository) {
        this.repository = repository;
    }

    public Student saveStudent(Student student) {
        return repository.save(student);
    }

    public List<Student> getAllStudents() {
        return repository.findAll();
    }
}
