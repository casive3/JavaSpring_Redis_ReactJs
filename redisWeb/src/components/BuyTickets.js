import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Card} from '@material-ui/core';
import axios from 'axios';
import EnhancedTable from './EnhancedTable'

class BuyTickets extends Component {
  constructor(props) {
        super(props);
        this.state = { 
            movies: [],
            value: 0
        };
    }

  componentDidUpdate() {
    axios.get(`http://localhost:8090/keys`, {headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }})
    .then(res => {
      let movies = res.data;
      console.log(movies)
      Object.keys(movies).forEach(function(key,index) {
        console.log("ben")
        console.log(key)
        console.log(index)
      })
      movies.map(e=>console.log(e))
      this.setState({ movies });
      for (var key in movies) {
        if (movies.hasOwnProperty(key)) {
            console.log(key + " -> " + movies[key]);
        }
    }
    })
  }
  
  meghiv(movies) {
    let item = [];
    Object.keys(movies).forEach(key =>item.push(<Card> {key} </Card>));
    return item;
  }

  render() {
    const {movies} = this.state;
    const {classes } = this.props;

    return (
        <Grid container className={classes.main}>
            {/* <Grid container>
                <EnhancedTable/>
            </Grid>
            <Grid container>
                {movies !==null ? this.meghiv(movies) :'Not found movies'}
            </Grid> */}
        </Grid>
    );
}}

const styles = theme => ({   
  main:{
    
  }
});

export default withStyles(styles)(BuyTickets);
