package com.cvr.sms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cvr.sms.entity.Student;
import com.cvr.sms.repository.StudentRepository;

@Service
public class StudentService {

    @Autowired
    private StudentRepository repo;

    public Student save(Student student) {
        return repo.save(student);
    }

    public List<Student> getAllStudents() {
        return repo.findAll();
    }

    public Student getStudent(Integer id) {
        return repo.findById(id).orElse(null);
    }

    public void deleteStudent(Integer id) {
        repo.deleteById(id);
    }
}