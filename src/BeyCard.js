import React, { Component } from "react";

class BeyCard extends React.Component {

  state = {
    favorited: this.props.favorited,
  }



  clickFunctionForCard = () => {
    let beyObj = this.props.beyObj
    console.log(beyObj)
    this.props.clickFunctionPropForCard(beyObj)
  }


  render() {
    return (
      <div>
        <h3>{this.props.beyObj.name}</h3>
        <img onClick={this.clickFunctionForCard} src={this.props.beyObj.img}/>
      </div>
    );
  }
}

export default BeyCard;
