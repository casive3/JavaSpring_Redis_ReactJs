import React, { Component } from "react";
import { Grid, Card } from "@material-ui/core";
import EnhancedTable from "./EnhancedTable";

class BuyTickets extends Component {

  render() {
    return (
      <Grid container>
        <EnhancedTable />
      </Grid>
    );
  }
}

export default BuyTickets;
