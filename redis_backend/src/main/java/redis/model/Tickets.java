package redis.model;

import java.util.List;

public class Tickets {

    public Tickets() {}

    public Tickets(List<String> movieIDs) {
        this.movieIDs = movieIDs;
    }

    public List<String> getMovieIDs() {
        return movieIDs;
    }

    public void setMovieIDs(List<String> movieIDs) {
        this.movieIDs = movieIDs;
    }

    List<String> movieIDs;
}
