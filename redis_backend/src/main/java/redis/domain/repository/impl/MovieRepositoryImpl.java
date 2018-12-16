package redis.domain.repository.impl;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.HashOperations;
import org.springframework.data.redis.core.ListOperations;
import org.springframework.data.redis.core.RedisCommand;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.SetOperations;
import org.springframework.stereotype.Repository;

import redis.domain.repository.MovieRepository;
import redis.model.Movie;

import java.util.Map;
import javax.annotation.PostConstruct;

@Repository
public class MovieRepositoryImpl implements MovieRepository {
    private static final String KEY = "Movie";
    
    private RedisTemplate<String, Object> redisTemplate;
    private HashOperations hashOperations;
    private ListOperations listOperations;
    private SetOperations setOp;
    private RedisCommand rs;
    
    @Autowired
    public MovieRepositoryImpl(RedisTemplate<String, Object> redisTemplate){
        this.redisTemplate = redisTemplate;
    }

    @PostConstruct
    private void init(){
        hashOperations = redisTemplate.opsForHash();
        listOperations = redisTemplate.opsForList();
    }
    
    public void add(final Movie movie) {
        ObjectMapper mapper = new ObjectMapper();
        String jsonInString = null;
        try {
            jsonInString = mapper.writeValueAsString(movie);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        System.out.println(jsonInString);
        hashOperations.put(KEY, movie.getId(), jsonInString);
    }

    public boolean delete(final String id) {
        if(hashOperations.get(KEY, id) == null) {
             return false;
        } else {
            hashOperations.delete(KEY, id);
            return true;
        }
    }
    
    public Movie findMovie(final String id){
        return (Movie) hashOperations.get(KEY, id);
    }
    
    public Map<Object, Object> findAllMovies(){
        return hashOperations.entries(KEY);
    }

}
