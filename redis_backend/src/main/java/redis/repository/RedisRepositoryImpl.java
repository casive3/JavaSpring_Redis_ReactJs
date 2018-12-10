package redis.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.HashOperations;
import org.springframework.data.redis.core.RedisCommand;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.SetOperations;
import org.springframework.stereotype.Repository;

import redis.model.Movie;

import java.util.Map;
import javax.annotation.PostConstruct;

@Repository
public class RedisRepositoryImpl implements RedisRepository {
    private static final String KEY = "Movie";
    
    private RedisTemplate<String, Object> redisTemplate;
    private HashOperations hashOperations;
    private SetOperations setOp;
    private RedisCommand rs;
    
    @Autowired
    public RedisRepositoryImpl(RedisTemplate<String, Object> redisTemplate){
        this.redisTemplate = redisTemplate;
    }

    @PostConstruct
    private void init(){
        hashOperations = redisTemplate.opsForHash();
    }
    
    public void add(final Movie movie) {
        movie.toString();
        hashOperations.put(KEY, movie.getId(), movie.getMovieTitle());
    }

    public void delete(final String id) {
        hashOperations.delete(KEY, id);
    }
    
    public Movie findMovie(final String id){
        return (Movie) hashOperations.get(KEY, id);
    }
    
    public Map<Object, Object> findAllMovies(){
        System.out.println(hashOperations.entries(KEY));

        return hashOperations.entries(KEY);
    }

  
}
