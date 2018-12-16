package redis.domain.service;

import org.springframework.http.ResponseEntity;
import sun.security.provider.certpath.OCSPResponse;

import java.util.List;

public interface MovieService {

    ResponseEntity buyTickets(List<String> param);
}
