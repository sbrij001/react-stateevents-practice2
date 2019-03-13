import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import BeyContainer from "./BeyContainer"
import Favorites from "./Favorites"
import beyImages from "./beyImages"

class App extends Component {
  state = {
    beyImages: beyImages,
    // filteredBeyImages: beyImages.filter(card => card.favorite),
  };

  filteredBeys = () => {
    return beyImages.filter(card => card.favorite === true)
  }


  clickHandler = (beyObj) => {
    console.log('did object pass up? yep', beyObj)
    let beyArray = [...this.state.beyImages]
    let bey = beyArray.find(bey => bey.id === beyObj.id)
    bey.favorite = !bey.favorite
    this.setState({
      beyImages: beyArray
    })

    }


  render() {
    return (
      <div className="container">
        <BeyContainer beyImages={this.state.beyImages} clickFunctionProp={this.clickHandler} favoritedProp={this.state.favorited}/>
        <Favorites filteredObjs={this.filteredBeys()} clickFunctionProp={this.clickHandler}/>
      </div>
    );
  }
}

export default App;
