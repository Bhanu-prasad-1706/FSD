package com.example.studentdemo;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Student {
	@Id
	private int studentId;
	private String studentName;
	private String email;
	private String course;
	private int age;
	public Student() {}
	public Student(int studentId,String studentName,String email,String course,int age) {
		this.studentId=studentId;
		this.studentName=studentName;
		this.email=email;
		this.course=course;
		this.age=age;
	}

    public int getId() {
        return studentId;
    }

    public void setId(int studentId) {
        this.studentId = studentId;
    }

    public String getName() {
        return studentName;
    }

    public void setName(String studentName) {
        this.studentName = studentName;
    }

    public String getEmail() {
    	return email;
    }
    public void setEmail(String email)
    {
    	this.email=email;
    }
    public String getCourse() {
    	return course;
    }
    public void setCourse(String course)
    {
    	this.course=course;
    }
    public int getAge() {
    	return age;
    }
    public void setAge(int age) {
    	this.age=age;
    }
    @Override
    public String toString() {
        return "Student [id=" + studentId + ", name=" + studentName + ", email=" + email + ", course="+course+", age="+age+"]";
    }
}
