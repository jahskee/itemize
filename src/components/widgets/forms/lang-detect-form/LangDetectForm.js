import React, { Component } from "react";
import "./zstyles.css";

import API from "components/api/api";

/*
The purpose of this form widget is to detect the language information
about an input String.
*/
class LangDetectForm extends Component {
  state = {
    enteredString: "",
    message: ""
  };

  /* When form is submitted get the language info */
  handleSubmit = async event => {
    event.preventDefault();

    const result = await API.getLanguageInfo(this.state.enteredString);
    const message = JSON.stringify(result);
    this.setState({ message: message });
  };

  handleReset = event => {
    event.preventDefault();
    this.setState({ enteredString: "", message: "" });
    this.enteredString.focus();
  };

  handleChangedEnteredString = event => {
    this.setState({ enteredString: event.target.value });
  };

  // set focus to input box using refs callback.
  componentDidMount() {
    this.enteredString.focus();
  }

  render() {
    return (
      <div id="lang-detect-form">
        <form onSubmit={this.handleSubmit}>
          <legend>
            <h4>Language Detection</h4>
          </legend>
          <input
            type="text"
            placeholder="Enter String"
            value={this.state.enteredString}
            className="control"
            onChange={this.handleChangedEnteredString}
            ref={input => {
              this.enteredString = input;
            }}
          />

          <div className="control">
            <button>Submit</button>
            <button onClick={this.handleReset}>Reset</button>
          </div>

          <textarea
            className="control"
            value={this.state.message}
            disabled="disabled"
          />
        </form>
      </div>
    );
  }
}

export default LangDetectForm;
