import React, { Component } from 'react';
import './zstyles.css'
class Main extends Component {

    render() {
        return(
        <div id='main'>
            <form>
        
                <legend>Personalia:</legend>
                <input type="text" placeholder="Enter Name" className="control"/>

                <div className="control">
                    <button>Submit</button>
                    <button>Reset</button>
                </div>
            
                <textarea className="control"/>
            </form>
        </div>
        )
    }
}

export default Main;