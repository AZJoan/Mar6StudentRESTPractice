package com.joan.SimpleREST.repo;
import com.joan.SimpleREST.domain.Student;
import org.springframework.data.repository.CrudRepository;

public interface StudentRepository
        extends CrudRepository<Student, Integer> {
}
