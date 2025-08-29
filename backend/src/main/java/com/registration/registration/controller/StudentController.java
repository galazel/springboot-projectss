package com.registration.registration.controller;

import java.io.IOException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.registration.registration.model.Student;
import com.registration.registration.service.StudentService;

@RestController
@RequestMapping("/students")
@CrossOrigin(origins = "http://localhost:5173")
public class StudentController 
{
    private final StudentService studentService;
    private final String uploadDir = System.getProperty("user.dir") + "/uploads";

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
        new File(uploadDir).mkdirs(); // create folder if not exist
    }

    @PostMapping
    public ResponseEntity<Student> registerStudent(
            @RequestParam("fullName") String fullName,
            @RequestParam("idNumber") String idNumber,
            @RequestParam("program") String program,
            @RequestParam("profile") MultipartFile profile) throws IOException {

        String profilePath = uploadDir + "/" + profile.getOriginalFilename();
        profile.transferTo(new File(profilePath));

        Student student = new Student();
        student.setFullName(fullName);
        student.setIdNumber(idNumber);
        student.setProgram(program);
        student.setProfileUrl(profilePath);

        Student saved = studentService.saveStudent(student);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }

    @GetMapping
    public List<Student> getStudents() {
        return studentService.getAllStudents();
    }
}
