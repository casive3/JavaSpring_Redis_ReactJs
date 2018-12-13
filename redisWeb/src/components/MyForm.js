import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Grid, Card, Button, Typography} from '@material-ui/core';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import green from '@material-ui/core/colors/green';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem'; 

class MyForm extends Component {
  constructor(props) {
        super(props);
        this.state = { 
            hallName: "",
            ticketPrice: "",
            movieTitle: "",
            category:"",
            date:"",
            time:""
        };
    }
    
    change = e => {
        this.props.onChange({ [e.target.name]: e.target.value });
        this.setState({
          [e.target.name]: e.target.value
        });
    };
    
    onSubmit = e => {
        e.preventDefault();
        this.props.onSubmit();
        this.setState({
            hallName: "",
            ticketPrice: "",
            movieTitle: "",
            date:"",
            category:"",
            time:""
        });
        this.props.onChange({
            hallName: "",
            ticketPrice: "",
            movieTitle: "",
            category:"",
            date:"",
            time:""
        });
    };

//   componentDidMount() {
//     // axios.get(`https://jsonplaceholder.typicode.com/users`)
//     axios.get(`http://localhost:8090/keys`, {headers: {
//       'Access-Control-Allow-Origin': '*',
//       'Content-Type': 'application/json',
//     }})
//     .then(res => {
//       const movies = res.data;
//       console.log(movies)
//       this.setState({ movies });
//     })
//   }
  

  render() {
    const { classes } = this.props;

    return (
        <Grid container className={classes.container}>
            <form>
                <FormControl required className={classes.formControl}>
                    <InputLabel htmlFor="hallName">Hall name</InputLabel>
                    <Select
                        value={this.state.hallName}
                        onChange={e => this.change(e)}
                        inputProps={{
                        name: 'hallName',
                        id: 'hallName',
                        }} 
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <br />
                <TextField
                    id="outlined-uncontrolled"
                    name="movieTitle"
                    label="Movie title"
                    value={this.state.firstName}
                    onChange={e => this.change(e)}
                    className={classes.textField}
                    variant="outlined"
                    required
                />
                <br />
                <FormControl required className={classes.formControl}>
                    <InputLabel htmlFor="category">Category</InputLabel>
                    <Select
                        value={this.state.category}
                        onChange={e => this.change(e)}
                        inputProps={{
                        name: 'category',
                        id: 'category',
                        }}
                    >
                        <MenuItem value={10}>Comedy</MenuItem>
                        <MenuItem value={20}>Action</MenuItem>
                        <MenuItem value={30}>Horror</MenuItem>
                        <MenuItem value={40}>Drama</MenuItem>
                    </Select>
                </FormControl>
                <br />
                <TextField
                    name="ticketPrice"
                    label="Ticket Price"
                    value={this.state.ticketPrice}
                    onChange={e => this.change(e)}
                    className={classes.textField}
                />
                <br />
                <TextField
                    id="date"
                    label="Date"
                    type="date"
                    // value={this.state.date}
                    defaultValue="2018-12-12"
                    className={classes.textField}
                    onChange={e => this.change(e)}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                <br />
                <TextField
                    id="time"
                    label="Starting time"
                    type="time"
                    defaultValue="07:30"
                    // value={this.state.time}
                    onChange={e => this.change(e)}
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{
                        step: 300, // 5 min
                    }}
                />
                <br />
                <Button variant="contained" color="primary" label="Submit" className={classes.button} onClick={e => this.onSubmit(e)} >
                    Submit
                </Button>
            </form>
        </Grid>
    );
}}

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing.unit,
    },
    textField: {    
        padding: 8,
        margin: 12
      },
      formControl: {
        margin: 12,
        minWidth: 120,
      },
      button:{

      }
})

export default withStyles(styles)(MyForm);
