import React, { Component } from "react";
import './zstyles.css'

class LangDetectForm extends Component {
    render() {
        return (
          
            <form>        
                <legend>Personalia:</legend>
                <input type="text" placeholder="Enter Name" className="control"/>

                <div className="control">
                    <button>Submit</button>
                    <button>Reset</button>
                </div>
            
                <textarea className="control"/>
            </form>
        
        );
    }
}

export default LangDetectForm;