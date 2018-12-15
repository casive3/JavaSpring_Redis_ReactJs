package redis.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import redis.domain.service.MovieService;
import redis.model.Movie;
import redis.domain.repository.MovieRepository;
import redis.model.Tickets;

@Controller
@CrossOrigin
@RequestMapping("/")
@ResponseStatus(HttpStatus.OK)
public class WebController {
    
    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private MovieService movieService;

    @RequestMapping("/")
    public String index() {
        return "index";
    }

    @RequestMapping("/keys")
    public @ResponseBody Map<Object, Object> keys() {
        return movieRepository.findAllMovies();
    }

    @RequestMapping("/values")
    public @ResponseBody Map<String, String> findAll() {
        Map<Object, Object> aa = movieRepository.findAllMovies();
        Map<String, String> map = new HashMap<String, String>();
        for(Map.Entry<Object, Object> entry : aa.entrySet()){
            String key = (String) entry.getKey();
            map.put(key, aa.get(key).toString());
        }
        return map;
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public void newEmployee(@RequestBody Movie newMovie) {
        movieRepository.add(newMovie);
    }

    @RequestMapping(value = "/buyTickets", method = RequestMethod.POST)
    public @ResponseBody ResponseEntity buyTickets(@RequestBody Tickets ticketsRequest) {
       return movieService.buyTickets(ticketsRequest.getMovieIDs());
    }

    @RequestMapping(value = "/delete", method = RequestMethod.POST)
    public ResponseEntity<String> delete(@RequestParam String key) {
        System.out.println(key);
        movieRepository.delete(key);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
