import React from "react";
import beyImages from "./beyImages";
import BeyCard from "./BeyCard";

class BeyContainer extends React.Component {
  state = {
    beyImages: this.props.beyImages,
    favoriteState: this.props.favoritedProp
  };

  clickFunctionState = (beyObj) => {
    this.props.clickFunctionProp(beyObj)
  }



  render() {
    let arrOfCards = this.state.beyImages.map(beyImage =>
      <BeyCard key={beyImage.id} beyObj={beyImage} favorited={this.state.favoriteState} clickFunctionPropForCard={this.clickFunctionState}/>
    )

    return (
      <div className="index">
        <h1>Index</h1>
        {arrOfCards}
      </div>
    );
  }
}

export default BeyContainer;
