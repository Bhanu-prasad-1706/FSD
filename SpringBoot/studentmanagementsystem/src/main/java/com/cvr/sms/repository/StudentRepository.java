package com.cvr.sms.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cvr.sms.entity.Student;

public interface StudentRepository extends JpaRepository<Student, Integer> {

}