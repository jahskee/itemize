import React, { Component } from "react";
import './zstyles.css'

import API from 'components/api/api';

class LangDetectForm extends Component {
    state = {
        enteredString: 'sd',
        message: 'hello',        
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        alert('submit pressed');
        const result = await API.getLanguageInfo('helloworld');
        alert(JSON.stringify(result));
    }

    handleReset = (event) => {
        event.preventDefault();     
        this.setState({enteredString:'', message: ''})
        this.enteredString.focus(); 
    }
    
    handleChangedEnteredString = (event) => {
        this.setState({enteredString: event.target.value})
    }

    componentDidMount(){
        this.enteredString.focus(); 
    }
    render() {
        return (
          <div id="lang-detect-form">
            <form  onSubmit={this.handleSubmit} >        
                <legend><h4>Language Detection</h4></legend>
                <input type="text" 
                        placeholder="Enter String"
                        value={this.state.enteredString} 
                        className="control"    
                        onChange={this.handleChangedEnteredString }
                        ref={(input) => { this.enteredString = input; }}  />

                <div className="control">
                    <button>Submit</button>
                    <button onClick={this.handleReset}>Reset</button>
                </div>
            
                <textarea className="control" value={this.state.message} disabled="disabled"/>
            </form>
          </div>
        );
    }
}

export default LangDetectForm;