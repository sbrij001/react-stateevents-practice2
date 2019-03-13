import React, { Component } from "react";
import beyImages from "./beyImages";
import BeyCard from "./BeyCard"

export default class Favorites extends Component {

  // state = {
  //   filteredCards: this.props.filtered
  // }

  render() {
    let filteredCardComponents = this.props.filteredObjs.map(beyImage =>
      <BeyCard key={beyImage.id} beyObj={beyImage} favorited={beyImage.favorite}/>
    )

    // let filteredCards = arrOfCards.filter(card => card.favorite === true)
    return (
      <div className="favorites">
        <h1>Favorites</h1>
        {filteredCardComponents}
      </div>
    );
  }
}
