import React, { Component } from "react";

class BeyCard extends React.Component {

//the reason we are creating a sep function outside of the onClick is because we want to pass in an obj in the function
//we also dont want to invoke the function right away hence the arrow function.

  handleClicker = () => {
    // let bey = this.props.bey
    this.props.handleClickFunction(this.props.bey)
  }

  render() {
    return (
      <div>
        <h3>{this.props.bey.name}</h3>
        <img onClick={this.handleClicker} src={this.props.bey.img}/>
      </div>
    );
  }
}

export default BeyCard;
