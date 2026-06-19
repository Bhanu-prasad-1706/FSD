package com.example.studentdemo;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class StudentDAO {
	 
    private static final SessionFactory factory =
            new Configuration().configure().buildSessionFactory();

    // CREATE
    public void saveStudent(Student student) {
        Session session = factory.openSession();
        Transaction tx = session.beginTransaction();
        session.persist(student);
        tx.commit();
        session.close();
    }

    // READ ALL
    public List<Student> getAllStudents() {
        Session session = factory.openSession();
        List<Student> students =
                session.createQuery("FROM Student", Student.class).list();
        session.close();
        return students;
    }

    // READ ONE (used by update)
    public Student getStudent(int id) {
        Session session = factory.openSession();
        Student student = session.get(Student.class, id);
        session.close();
        return student;
    }

    // UPDATE
    public void updateStudent(Student student) {
        Session session = factory.openSession();
        Transaction tx = session.beginTransaction();
        session.merge(student);
        tx.commit();
        session.close();
    }

    // DELETE
    public void deleteStudent(int id) {
        Session session = factory.openSession();
        Transaction tx = session.beginTransaction();
        Student student = session.get(Student.class, id);
        if (student != null) {
            session.remove(student);
        }
        tx.commit();
        session.close();
    }
}
