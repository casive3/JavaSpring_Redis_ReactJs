package redis.repository;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.HashOperations;
import org.springframework.data.redis.core.ListOperations;
import org.springframework.data.redis.core.RedisCommand;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.SetOperations;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.stereotype.Repository;

import redis.model.Movie;

import java.util.HashMap;
import java.util.Map;
import javax.annotation.PostConstruct;

@Repository
public class RedisRepositoryImpl implements RedisRepository {
    private static final String KEY = "Movie";
    
    private RedisTemplate<String, Object> redisTemplate;
    private HashOperations hashOperations;
    private ListOperations listOperations;
    private SetOperations setOp;
    private RedisCommand rs;
    
    @Autowired
    public RedisRepositoryImpl(RedisTemplate<String, Object> redisTemplate){
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

    public void delete(final String id) {
        hashOperations.delete(KEY, id);
    }
    
    public Movie findMovie(final String id){
        return (Movie) hashOperations.get(KEY, id);
    }
    
    public Map<Object, Object> findAllMovies(){
//        System.out.println(hashOperations.entries(KEY));
//        System.out.println(hashOperations.entries(KEY).get("kulcs"));
        return hashOperations.entries(KEY);
    }

}
