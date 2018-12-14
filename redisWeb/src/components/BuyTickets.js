import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Card } from "@material-ui/core";
import axios from "axios";
import EnhancedTable from "./EnhancedTable";

class BuyTickets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      value: 0
    };
  }

  meghiv(movies) {
    let item = [];
    Object.keys(movies).forEach(key => item.push(<Card> {key} </Card>));
    return item;
  }

  render() {
    const { movies } = this.state;
    const { classes } = this.props;

    return (
      <Grid container className={classes.main}>
        <EnhancedTable />
      </Grid>
    );
  }
}

const styles = theme => ({
  main: {}
});

export default withStyles(styles)(BuyTickets);
