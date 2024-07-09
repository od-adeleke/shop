import React from "react";
import heart from '../assets/icons/heart.svg'
import clickedHeart from '../assets/icons/heart02.svg'

const Card = ({ cardObj }) => {
  return (
    <li className="card-container">
      <div className="card">
        <div className="card-image">
          <img src={cardObj.photoName} alt={cardObj.title} />
          <img src={heart} alt="" />
        </div>
        <div className="card-body">
          <div className="card-hero-text">
            <p className="card-title">{cardObj.title}</p>
            <p className="card-price">${cardObj.price}</p>
          </div>
          <div className="colour-container card-colour-container">
            <div className="colour-options-container options-container">
              <div className="color01"></div>
              <div className="color02"></div>
              <div className="color03"></div>
              <div className="color04"></div>
              <div className="color05"></div>
              <div className="color06"></div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Card;
