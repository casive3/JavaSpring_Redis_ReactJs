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

  componentDidMount() {
    // axios.get(`https://jsonplaceholder.typicode.com/users`)
    axios.get(`http://localhost:8090/keys`, {headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }})
    .then(res => {
      const movies = res.data;
      console.log(movies)
      this.setState({ movies });
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
            <Grid container>
                <EnhancedTable/>
            </Grid>
            <Grid container>
                {movies !==null ? this.meghiv(movies) :'Not found movies'}
            </Grid>
        </Grid>
    );
}}

const styles = theme => ({   
  main:{
    
  }
});

export default withStyles(styles)(BuyTickets);
