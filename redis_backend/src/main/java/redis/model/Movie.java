package redis.model;

import org.json.JSONObject;

import java.io.Serializable;

public class Movie implements Serializable {
    
    /**
     * 
     */
    private static final long serialVersionUID = 1L;
    private String id;
    private String hallName;
    private String movieTitle;
    private String date;
    private String time;
    private String category;
    private Integer ticketPrice;

    public Movie(){}

    public Movie(String id, String hallName, String movieTitle, String date, String time, String category, Integer ticketPrice) {
        this.id = id;
        this.hallName = hallName;
        this.movieTitle = movieTitle;
        this.date = date;
        this.time = time;
        this.category = category;
        this.ticketPrice = ticketPrice;
    }

    @Override
    public String toString() {
        return "Movie{" +
                "id='" + id + '\'' +
                ", hallName='" + hallName + '\'' +
                ", movieTitle='" + movieTitle + '\'' +
                ", date='" + date + '\'' +
                ", time='" + time + '\'' +
                ", category='" + category + '\'' +
                ", ticketPrice=" + ticketPrice +
                '}';
    }

    public static long getSerialVersionUID() {
        return serialVersionUID;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getHallName() {
        return hallName;
    }

    public void setHallName(String hallName) {
        this.hallName = hallName;
    }

    public String getMovieTitle() {
        return movieTitle;
    }

    public void setMovieTitle(String movieTitle) {
        this.movieTitle = movieTitle;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Integer getTicketPrice() {
        return ticketPrice;
    }

    public void setTicketPrice(Integer ticketPrice) {
        this.ticketPrice = ticketPrice;
    }
}
