import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import "../App.css";
import MyForm from "./MyForm";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import green from "@material-ui/core/colors/green";
import amber from "@material-ui/core/colors/amber";
import WarningIcon from "@material-ui/icons/Warning";

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon
};

function MySnackbarContent(props) {
  const { classes, className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={classNames(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={classNames(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>
      ]}
      {...other}
    />
  );
}

const styles1 = theme => ({
  success: {
    backgroundColor: green[600]
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  info: {
    backgroundColor: theme.palette.primary.dark
  },
  warning: {
    backgroundColor: amber[700]
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit
  },
  message: {
    display: "flex",
    alignItems: "center"
  }
});

const MySnackbarContentWrapper = withStyles(styles1)(MySnackbarContent);

class Administration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
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
          <p>{JSON.stringify(this.state.fields, null, 2)}</p>
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

const styles2 = theme => ({
  margin: {
    margin: theme.spacing.unit
  }
});

export default withStyles(styles2)(Administration);
