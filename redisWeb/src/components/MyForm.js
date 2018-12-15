import React, { Component } from 'react';
import {Grid,  Button} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
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
            date:"2018-12-17",
            time:"07:30"
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
    };

  render() {
    const { classes } = this.props;
    const { date, time } = this.state;

    return (
        <Grid container className={classes.container}>
            <form>
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
                    <InputLabel htmlFor="hallName">Hall name</InputLabel>
                    <Select
                        value={this.state.hallName}
                        onChange={e => this.change(e)}
                        inputProps={{
                        name: 'hallName',
                        id: 'hallName',
                        }} 
                    >
                        <MenuItem value={'L03'}>L03</MenuItem>
                        <MenuItem value={'C12'}>C12</MenuItem>
                        <MenuItem value={'B24'}>B24</MenuItem>
                    </Select>
                </FormControl>
                <br />
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="category">Category</InputLabel>
                    <Select
                        value={this.state.category}
                        onChange={e => this.change(e)}
                        inputProps={{
                        name: 'category',
                        id: 'category',
                        }}
                    >
                        <MenuItem value={'Comedy'}>Comedy</MenuItem>
                        <MenuItem value={'Action'}>Action</MenuItem>
                        <MenuItem value={'Horror'}>Horror</MenuItem>
                        <MenuItem value={'Drama'}>Drama</MenuItem>
                    </Select>
                </FormControl>
                <br />
                <TextField
                    name="ticketPrice"
                    label="Ticket Price"
                    value={this.state.ticketPrice}
                    onChange={e => this.change(e)}
                    className={classes.textField}
                    required
                />
                <br />
                <TextField
                    name="date"
                    label="Date"
                    type="date"
                    defaultValue={date}
                    value={date}
                    className={classes.textField}
                    onChange={e => this.change(e)}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                <br />
                <TextField
                    name="time"
                    label="Starting time"
                    type="time"
                    defaultValue={time}
                    value={time}
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
                <Button type='submit' variant="contained" color="primary" label="Submit" className={classes.button} onClick={e => this.onSubmit(e)} >
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
        margin: 12,
        width: 180
      },
      formControl: {
        margin: 12,
        minWidth: 180,
      }
})

export default withStyles(styles)(MyForm);
