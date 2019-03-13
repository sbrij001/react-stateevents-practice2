import React from "react";
import BeyCard from "../Components/BeyCard"

class BeyContainer extends React.Component {
  state = {
    beys: []
  };

//to access ur state u always want to start with this

  componentDidMount() {
    fetch('http://localhost:3001/beys')
    .then(resp => resp.json())
    .then(beys => this.setState({
      beys
    }))
  }


  //handlers are always before the render shivani!
  //handlers need to be called on an obj (THIS)
  handleClickedObj = (bey) => {
    let copiedArr = [...this.state.beys]
    let filteredArr = copiedArr.filter(beyObj => beyObj.id !== bey.id)
    // delete it off of copied arr
    // set state with newly updated copied
    this.setState({
      beys: filteredArr
    })

  }

  render() {
    let arrOfBeyCards = this.state.beys.map(beyObj => <BeyCard key={beyObj.id} bey={beyObj} handleClickFunction={this.handleClickedObj}/>)
    return (
      <div className="index">
        <h1>Index</h1>
        {arrOfBeyCards}
      </div>
    );
  }
}

export default BeyContainer;
