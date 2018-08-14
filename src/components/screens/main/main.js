import React, { Component } from "react";
import "./zstyles.css";

import LangDetectForm from "components/widgets/forms/lang-detect-form/LangDetectForm";

class Main extends Component {
  render() {
    return (
      <div id="main">
        <LangDetectForm />
      </div>
    );
  }
}

export default Main;
