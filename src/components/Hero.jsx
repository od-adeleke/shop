import React from "react";
import logo from "../assets/icons/logo.svg";
import filter from "../assets/icons/firstline.svg";
import like from "../assets/icons/heart.svg";
import cart from "../assets/icons/shopping-cart.svg";
import profile from "../assets/icons/profile-circle.svg";
import arrowDown from "../assets/icons/arrow-down.svg";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="menuIcon-container">
          <img src={filter} alt="filter" />
        </div>
        <div className="logo-container">
          <img src={logo} alt="logo" />
        </div>
        <div className="options-container">
          <div className="options-content">
              <img src={like} alt="like" />
              <img src={cart} alt="cart" />
            <div className="icon">
              <img src={profile} alt="profile" />

              <img src={arrowDown} alt="arrowDown" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
