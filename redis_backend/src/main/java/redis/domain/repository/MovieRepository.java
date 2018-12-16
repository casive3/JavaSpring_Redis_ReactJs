package redis.domain.repository;

import java.util.Map;

import redis.model.Movie;

public interface MovieRepository {

    /**
     * Return all movies
     */
    Map<Object, Object> findAllMovies();

    /**
     * Add key-value pair to Redis.
     */
    void add(Movie movie);

    /**
     * Delete a key-value pair in Redis.
     */
    boolean delete(String id);
    
    /**
     * find a movie
     */
    Movie findMovie(String id);
    
}
