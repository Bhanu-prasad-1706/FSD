package com.example.studentdemo;

import java.util.List;
import java.util.Scanner;

public class App 
{
    public static void main( String[] args )
    {
    	StudentDAO dao = new StudentDAO();
    	
        Scanner sc = new Scanner(System.in);

        while (true) {
            System.out.println("\n===== PRODUCT MENU =====");
            System.out.println("1. Insert Student");
            System.out.println("2. Read All Students");
            System.out.println("3. Update Student");
            System.out.println("4. Delete Student");
            System.out.println("5. Exit");
            System.out.print("Enter your choice: ");

            int choice = sc.nextInt();

            switch (choice) {
                case 1:
                    System.out.print("Enter Student id ");
                    int studentId = sc.nextInt();
                    System.out.print("Enter name ");
                    String studentName=sc.next();
                    System.out.print("Enter email ");
                    String email=sc.next();
                    System.out.print("Enter course ");
                    String course=sc.next();
                    System.out.print("Enter age ");
                    int age=sc.nextInt(); 
                    
                    dao.saveStudent(new Student(studentId,studentName,email,course,age));
                    System.out.println("Student inserted successfully!");
                    break;

                case 2:
                    List<Student> students = dao.getAllStudents();
                    if (students.isEmpty()) {
                        System.out.println("No Students found.");
                    } else {
                        for (Student p : students) {
                            System.out.println(p);
                        }
                    }
                    break;

                case 3:
                    System.out.print("Enter id of student to update: ");
                    int updateId = sc.nextInt();
                    Student existing = dao.getStudent(updateId);
                    if (existing == null) {
                        System.out.println("Student not found.");
                        break;
                    }
                    System.out.print("Enter name ");
                    existing.setName(sc.next());
                    System.out.print("Enter email ");
                    existing.setEmail(sc.next());
                    System.out.print("Enter course ");
                    existing.setCourse(sc.next());
                    System.out.print("Enter age ");
                    existing.setAge(sc.nextInt());
                    dao.updateStudent(existing);
                    System.out.println("Student updated successfully!");
                    break;

                case 4:
                    System.out.print("Enter id of studentt to delete: ");
                    int deleteId = sc.nextInt();
                    dao.deleteStudent(deleteId);
                    System.out.println("Student deleted (if it existed).");
                    break;

                case 5:
                    System.out.println("Exiting...");
                    sc.close();
                    System.exit(0);

                default:
                    System.out.println("Invalid choice! Try again.");
            }
        }
    }
}
