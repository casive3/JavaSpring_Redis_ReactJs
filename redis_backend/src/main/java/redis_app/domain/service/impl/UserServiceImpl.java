//package redis_app.domain.service.impl;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import redis_app.domain.model.User;
//import redis_app.domain.repository.UserRepository;
//import redis_app.domain.service.UserService;
//import java.util.List;
//
//@Service
//public class UserServiceImpl implements UserService {
//
//    @Autowired
//    private UserRepository userRepository;
//
//    @Override
//    public List<User> findAll() {
//            return userRepository.findAll();
//    }
//
//    @Override
//    public Boolean save() {
//        User u1 = new User((long) 12312,"Ez a neve");
//        return userRepository.save(u1);
//    }
//
//
//}
