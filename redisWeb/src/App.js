import React, { Component } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import {AppBar, Grid, Card, Tab,Tabs, NoSsr} from '@material-ui/core';
import axios from 'axios';
import Administration from './components/Administration'
import BuyTickets from './components/BuyTickets'
import Contacts from './components/Contacts'


  function LinkTab(props) {
    return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
  }
 

class App extends Component {

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

  
  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const {movies, value} = this.state;

    return (
        <NoSsr>
            <div className={classes.root}>
                <AppBar position="static">
                    <Tabs fullWidth value={value} onChange={this.handleChange}>
                    <LinkTab label="Buy tickets" href="page1" />
                    <LinkTab label="Administration" href="page2" />
                    <LinkTab label="Elérhetőségek" href="page3" />
                    </Tabs>
                </AppBar>
                <Grid container className={classes.main}>
                    {value === 0 && <BuyTickets/>}
                    {value === 1 && <Administration/>}
                    {value === 2 && <Contacts/>}
                </Grid>
            </div>
        </NoSsr>
    );
}}

const styles = theme => ({   
    root: {
        flexGrow: 10,
        backgroundColor: theme.palette.background.paper,
      },
    main:{
        justifyContent: 'center'
    },
    header: {
        backgroundColor:'red'
    },
    button: {
        backgroundColor:'white'
    }
});

export default withStyles(styles)(App);
