package redis_app.domain.repository;

import org.springframework.stereotype.Repository;
import redis_app.domain.model.User;

import java.util.List;

@Repository
public interface UserRepository {

    List<User> findAll();
    Boolean save(User user);
    void add(User user);
}
