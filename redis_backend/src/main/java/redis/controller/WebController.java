package redis.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import redis.model.Movie;
import redis.repository.RedisRepository;

@Controller
@CrossOrigin
@RequestMapping("/")
public class WebController {
    
    @Autowired
    private RedisRepository redisRepository;

    @RequestMapping("/")
    public String index() {
        return "index";
    }

    @RequestMapping("/keys")
    public @ResponseBody Map<Object, Object> keys() {
        return redisRepository.findAllMovies();
    }

    @RequestMapping("/values")
    public @ResponseBody Map<String, String> findAll() {
        Map<Object, Object> aa = redisRepository.findAllMovies();
        Map<String, String> map = new HashMap<String, String>();
        for(Map.Entry<Object, Object> entry : aa.entrySet()){
            String key = (String) entry.getKey();
            map.put(key, aa.get(key).toString());
        }
        return map;
    }

//    @RequestMapping(value = "/add", method = RequestMethod.POST)
    @PostMapping("/add")
    public void newEmployee(@RequestBody Movie newMovie) {
        System.out.println("ittvan");
        System.out.println(newMovie);
        redisRepository.add(newMovie);
    }

//    public ResponseEntity<String> add(){
//        System.out.println("key:"+ key);
//        System.out.println("value:" + value);
//        Movie movie = new Movie(key, value);
//        redisRepository.add(movie);
//        return new ResponseEntity<>(HttpStatus.OK);
//    }

    @RequestMapping(value = "/delete", method = RequestMethod.POST)
    public ResponseEntity<String> delete(@RequestParam String key) {
        redisRepository.delete(key);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
