import React, { Component } from "react";
import "./App.css";
import { withStyles } from "@material-ui/core/styles";
import { AppBar, Grid, Tab, Tabs, NoSsr } from "@material-ui/core";
import Administration from "./components/Administration";
import BuyTickets from "./components/BuyTickets";
import Contacts from "./components/Contacts";

function LinkTab(props) {
  return (
    <Tab component="a" onClick={event => event.preventDefault()} {...props} />
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      value: 0
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

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
            {value === 0 && <BuyTickets />}
            {value === 1 && <Administration />}
            {value === 2 && <Contacts />}
          </Grid>
        </div>
      </NoSsr>
    );
  }
}

const styles = theme => ({
  root: {
    flexGrow: 10,
    backgroundColor: theme.palette.background.paper
  },
  main: {
    justifyContent: "center"
  },
  header: {
    backgroundColor: "red"
  },
  button: {
    backgroundColor: "white"
  }
});

export default withStyles(styles)(App);
