import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import "../App.css";
import MyForm from "./MyForm";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import MySnackbarContentWrapper from './MySnackbarContentWrapper';
import Snackbar from "@material-ui/core/Snackbar";

class Administration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {    
        date:"2018-12-17",
        time:"07:30"
      },
      openSuccess: false,
      openError: false
    };
  }
  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      },
      openSuccess: false,
      openError: false
    });
  };
  onSubmit = () => {
    axios
      .post(`http://localhost:8090/add`, {
        id: Math.random()
          .toString(36)
          .substr(2, 9),
        ...this.state.fields
      })
      .then(res => {
        res.status === 200
          ? this.setState({ openSuccess: true })
          : this.setState({ openError: true });
      })
      .catch(error => {
        console.log(error.response);
        this.setState({ openError: true });
      });
  };

  render() {
    const { classes } = this.props;
    const { openError, openSuccess } = this.state;
    return (
      <MuiThemeProvider>
        <div className="App">
          <MyForm
            onChange={fields => this.onChange(fields)}
            onSubmit={this.onSubmit.bind(this)}
          />
          <Snackbar
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center"
            }}
            open={openSuccess}
            autoHideDuration={600}
          >
            <MySnackbarContentWrapper
              variant="success"
              message="Created new Movie successfully"
            />
          </Snackbar>
          <Snackbar
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center"
            }}
            open={openError}
            autoHideDuration={600}
          >
            <MySnackbarContentWrapper
              variant="error"
              className={classes.margin}
              message="Something went wrong"
            />
          </Snackbar>
        </div>
      </MuiThemeProvider>
    );
  }
}

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit
  }
});

export default withStyles(styles)(Administration);
