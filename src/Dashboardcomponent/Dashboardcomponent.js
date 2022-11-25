import React, {Component} from "react";
import './Dashboardstyles.css';

class Dashboardcomponent extends Component{

    constructor(props){
        super(props);
        this.selectedRating = 0;
        this.state = {
            isClicked : false,
            backgroundColor : ""
        };
    }

    changeDashboardState = () => {
        this.setState({
            isClicked : true
        })
    }

    changeBackgroundColor = (rating) => {
        this.setState({
            backgroundColor : 'hsl(25, 97%, 53%)',
            isClicked : false
        })
        this.selectedRating = rating
    }

    render(){
        return(
            <div>
                <div className = {this.state.isClicked && this.selectedRating !== 0 ? 'Vanish-Dashboard' : 'Main-Dashboard'}>
                <div className="Circle"></div>
                <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"
                style={{ display : 'inline-block',
                margin : '2rem 0rem 0rem 1.5rem', scale : '1.1'}}><path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" fill="#FC7614"/></svg>
                    <h1>How did we do?</h1>
                    <p>Please let us know how did we do with your support request. All feedback is appreciated to
                    help us improve our offering!</p>
                    <div className="Rating-Links">
                        <span className="Rating-Value" onClick = {() => this.changeBackgroundColor(1)}
                        style = {{backgroundColor : this.selectedRating === 1 ?  this.state.backgroundColor : ''}}>1</span>
                        <span className="Rating-Value" onClick = {() => this.changeBackgroundColor(2)}
                        style = {{backgroundColor : this.selectedRating === 2 ?  this.state.backgroundColor : ''}}>2</span>
                        <span className="Rating-Value" onClick = {() => this.changeBackgroundColor(3)}
                        style = {{backgroundColor : this.selectedRating === 3 ?  this.state.backgroundColor : ''}}>3</span>
                        <span className="Rating-Value" onClick = {() => this.changeBackgroundColor(4)}
                        style = {{backgroundColor : this.selectedRating === 4 ?  this.state.backgroundColor : ''}}>4</span>
                        <span className="Rating-Value" onClick = {() => this.changeBackgroundColor(5)}
                        style = {{backgroundColor : this.selectedRating === 5 ?  this.state.backgroundColor : ''}}>5</span>
                    </div>
                    <a href = "/#" className="Submit-Btn" onClick={this.changeDashboardState}>SUBMIT</a>
                </div>
                <div className = {this.state.isClicked && this.selectedRating !== 0 ? 'Result-Dashboard' : 'Vanish-Dashboard'}>
                    
                </div>
            </div>
            
        )
    }
}

export default Dashboardcomponent;