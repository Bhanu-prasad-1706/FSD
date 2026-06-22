package com.cvr.sms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.cvr.sms.entity.Student;
import com.cvr.sms.service.StudentService;

@RestController
@RequestMapping("/students")
@CrossOrigin("*")
public class StudentController {

    @Autowired
    private StudentService service;

    @PostMapping
    public Student saveStudent(@RequestBody Student student) {
        return service.save(student);
    }

    @GetMapping
    public List<Student> getStudents() {
        return service.getAllStudents();
    }

    @GetMapping("/{id}")
    public Student getStudent(@PathVariable Integer id) {
        return service.getStudent(id);
    }

    @PutMapping("/{id}")
    public Student updateStudent(
            @PathVariable Integer id,
            @RequestBody Student student) {

        student.setId(id);
        return service.save(student);
    }

    @DeleteMapping("/{id}")
    public void deleteStudent(@PathVariable Integer id) {
        service.deleteStudent(id);
    }
}