import React, { Component } from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import "../App.css";
import MyForm from "./MyForm";
import axios from 'axios';

class Administration extends Component {
  state = {
    fields: {}
  };

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };

  onSubmit = () => {
      axios.post(`http://localhost:8091/add`, this.state.fields)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <MyForm onChange={fields => this.onChange(fields)} onSubmit={this.onSubmit} />
          <p>
            {JSON.stringify(this.state.fields, null, 2)}
          </p>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Administration;