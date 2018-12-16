import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { Payment } from "@material-ui/icons";
import FilterListIcon from "@material-ui/icons/FilterList";
import { lighten } from "@material-ui/core/styles/colorManipulator";
import classNames from "classnames";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import MySnackbarContentWrapper from './MySnackbarContentWrapper';
import Snackbar from "@material-ui/core/Snackbar";
import PropTypes from 'prop-types';


class EnhancedTableToolbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      openSuccess: false,
      openError: false
    };
  }

  buyTickets(selected) {
    console.log({movieIDs:selected})
      axios
      .post(`http://localhost:8090/buyTickets`, {movieIDs:selected})
      .then(res => {
        res.status === 200
          ? this.setState({ openSuccess: true })
          : this.setState({ openError: true });
          this.props.reInitTable();
      })
      .catch(error => {
        console.log(error);
        this.setState({ openError: true });
      });
    }
    

  render(){
    const { numSelected, selected, classes } = this.props;
    const { openSuccess, openError } = this.state;

    return (
      <React.Fragment>
        <Toolbar
          className={classNames(classes.root, {
            [classes.highlight]: numSelected > 0
          })}
        >
          <div className={classes.title}>
            {numSelected > 0 ? (
              <Typography color="inherit" variant="title">
                {numSelected} selected
              </Typography>
            ) : (
              <Typography variant="display2" id="tableTitle">
                Movies
              </Typography>
            )}
          </div>
          <div className={classes.spacer} />
          <div className={classes.actions}>
            {numSelected > 0 ? (
              <div>
                <Tooltip title="Buy">
                  <IconButton onClick={() => this.buyTickets(selected)}>
                    <Payment />
                  </IconButton>
                </Tooltip>
              </div>
            ) : (
              <Tooltip title="Filter list">
                <IconButton aria-label="Filter list">
                  <FilterListIcon />
                </IconButton>
              </Tooltip>
            )}
          </div>
        </Toolbar>
        <div onClick={()=> {this.setState({openSuccess:false,openError:false})}}>
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
            message="Request sent successfully"
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
            message="Something went wrong, maybe this ticket is sold"
          />
        </Snackbar>
        </div>
      </React.Fragment>
      );
    };
  }
  
  EnhancedTableToolbar.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired
  };
  
  const toolbarStyles = theme => ({
    root: {
      paddingRight: theme.spacing.unit
    },
    highlight:
      theme.palette.type === "light"
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85)
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark
          },
    spacer: {
      flex: "1 1 100%"
    },
    actions: {
      color: theme.palette.text.secondary
    },
    title: {
      flex: "0 0 auto"
    }
  });

  export default withStyles(toolbarStyles)(EnhancedTableToolbar);
  
  