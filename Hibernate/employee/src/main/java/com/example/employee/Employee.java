package com.example.employee;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
public class Employee {
	@Id
	private int empid;
	private String empname;
	private String dept;
	private double salary;
	@Temporal(TemporalType.DATE)
    private Date joinDate;
	
	public Employee() {
		
	}
	public Employee(int empid,String empname,String dept,double salary,Date joinDate) {
		this.empid=empid;
		this.empname=empname;
		this.dept=dept;
		this.salary=salary;
		this.joinDate=joinDate;
	}
	public int getEmployeeId(){
		return empid;
	}
	public String getEmployeeName() {
		return empname;
	}
	public String getDept() {
		return dept;
	}
	public double getSalary() {
		return salary;
	}
	public Date getJoinDate() {
		return joinDate;
	}
	public void setEmployeeId(int empid) {
		this.empid=empid;
	}
	public void setEmployeeName(String empname) {
		this.empname=empname;
	}
	public void setDept(String dept) {
		this.dept=dept;
	}
	public void setSalary(double salary) {
		this.salary=salary;
	}
	public void setJoinDate(Date joinDate) {
		this.joinDate = joinDate;
	}
}
