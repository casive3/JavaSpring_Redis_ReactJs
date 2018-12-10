import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Grid, Card, Button, Typography} from '@material-ui/core';
import axios from 'axios';
 
class Contacts extends Component {
  constructor(props) {
        super(props);
        this.state = { 
            movies: [],
            value: 0
        };
	}
  
  meghiv(movies) {
    let item = [];
    Object.keys(movies).forEach(key =>item.push(<Card> {key} </Card>));
    return item;
  }

  render() {
    const { classes } = this.props;
    const {movies} = this.state;

    return (
        <Grid container className={classes.main}>
            <Grid container>
                <Button
                    variant="outlined"
                    color="primary"
                    className={classes.button}
                    // onClick={this.resetAllFilters.bind(this)}
                >
                    Contacts
                </Button>
            </Grid>
            <Grid container>
                {movies !==null ? this.meghiv(movies) :'Not found movies'}
            </Grid>
        </Grid>
    );
}}

const styles = theme => ({   
  main:{

  },
  button: {
    backgroundColor:'white'
  }
});

export default withStyles(styles)(Contacts);
