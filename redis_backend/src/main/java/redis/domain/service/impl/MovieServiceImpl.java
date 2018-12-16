package redis.domain.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import redis.domain.repository.MovieRepository;
import redis.domain.service.MovieService;

import java.util.List;
import java.util.concurrent.atomic.AtomicBoolean;

@Service
public class MovieServiceImpl implements MovieService {

    @Autowired
    private MovieRepository movieRepository;

    @Override
    public ResponseEntity buyTickets(List<String> param) {
        AtomicBoolean deleteBreak = new AtomicBoolean(false);
        param.forEach(item->{
            if(!movieRepository.delete(item)) {
                deleteBreak.set(true);
            }
        });
        if(deleteBreak.get()){
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        } else {
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }
}
