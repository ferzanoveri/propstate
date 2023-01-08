import React, { Component } from 'react';
import FCB from "./FCB.jpg";
import messi from "./Leomessi.jpeg";

class NewComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Subscribe to Simplilearn",
         sub: "Subscribe",
         imgURL: FCB
      }
    }

    styles={
        fontStyle: "italic",
        color: "purple"
      };

      Buttonchange = () => {
        this.setState({
            message: "Hit the bell icon to never miss an update",
            sub: "Subscribed",
        })
      }

      imageChange = () => {
        this.setState({
            imgURL: messi,
            message: "Thank you happy learning"
        })
      }

    render() {
        return (
            <div className='App'>
                <h3 style={this.styles}>{this.state.message}</h3>
                <button onClick={this.Buttonchange}>{this.state.sub}</button>
                <p/>
                <img 
                style={{width: "100px", height: "100px"}} 
                src={this.state.imgURL} 
                onClick={this.imageChange}
                alt="" />
            </div>
        );
    }
}

export default NewComp;
