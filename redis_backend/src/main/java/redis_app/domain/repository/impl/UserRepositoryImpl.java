package redis_app.domain.repository.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.HashOperations;
import org.springframework.stereotype.Repository;
import redis_app.domain.model.User;
import redis_app.domain.repository.UserRepository;

import javax.annotation.PostConstruct;
import java.util.List;

@Repository
public class UserRepositoryImpl implements UserRepository {

    private static final String KEY = "User";

    private RedisTemplate<String, Object> redisTemplate;
//    private HashOperations<String, Long, User> hashOperations;
    private HashOperations hashOperations;

    @Autowired
    public UserRepositoryImpl(RedisTemplate<String, Object> redisTemplate) {
        this.redisTemplate = redisTemplate;
    }

    @PostConstruct
    private void init() {
        hashOperations = redisTemplate.opsForHash();
    }

    public Boolean save(User user) {
        try {
            hashOperations.put(KEY, user.getId(), user);
            return true;
        }
        catch (Exception e) {
            return false;
        }
    }

    public void add(final User user) {
        hashOperations.put(KEY, user.getId(), user.getName());
    }

    public List<User> findAll(){return null;}
}
