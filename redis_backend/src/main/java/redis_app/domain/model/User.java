package redis_app.domain.model;

import java.io.Serializable;
import org.springframework.data.redis.core.RedisHash;
import java.lang.annotation.Documented;

@RedisHash("Student")
public class User implements Serializable {

    private Long id;
    private String name;

    public User(Long id, String name){
        this.id = id;
        this.name = name;
    }
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
