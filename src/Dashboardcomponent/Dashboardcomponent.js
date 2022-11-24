import React, {Component} from "react";
import './Dashboardstyles.css';

class Dashboardcomponent extends Component{
    render(){
        return(
            <div className = "Main-Dashboard">
                <h1>How did we do?</h1>
                <p>Please let us know how did we do with your support request. All feedback is appreciated to
                help us improve our offering!</p>
                <div className="Rating-Links">
                    <span className="Rating-Value">1</span>
                    <span className="Rating-Value">2</span>
                    <span className="Rating-Value">3</span>
                    <span className="Rating-Value">4</span>
                    <span className="Rating-Value">5</span>
                </div>
                <a href = "/#" className="Submit-Btn">SUBMIT</a>
            </div>
        )
    }
}

export default Dashboardcomponent;