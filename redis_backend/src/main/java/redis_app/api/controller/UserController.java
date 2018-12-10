package redis_app.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import redis_app.domain.model.User;
import redis_app.domain.repository.UserRepository;


@Controller
@RequestMapping("/")

public class UserController {

    @Autowired
    private UserRepository userRepository;


    @CrossOrigin
    @RequestMapping("/user")
    public Boolean users() {
        System.out.print("Juhhuhuhu");
        User u1 = new User((long) 12312, "Ez a neve");
        return userRepository.save(u1);
    }

//    @CrossOrigin
//    @RequestMapping("/api/message")
//    public String index() {
//        return "Greetings from Spring Boot!";
//    }

}