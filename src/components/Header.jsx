import React from "react";
import search from "../assets/icons/search-normal.svg";
import contact from "../assets/icons/messages.svg";
import arrowDown from "../assets/icons/arrow-down.svg";
import location from "../assets/icons/location-tick.svg";

const Header = () => {
  return (
    <>
      <header className="header-container">
        <div className="header-left-container">
          <div className="header-left-content">
            <div className="location-container">
              <img src={location} alt="location" />
              <p>Location</p>
            </div>
            <p className="divider">|</p>
            <div className="language-container">
              <p>English</p>
              <p>🇺🇸</p>
              <img src={arrowDown} alt="arrow down" />
            </div>
          </div>
        </div>

        <div className="header-right-container">
          <div className="header-right-content">
            <div className="header-search">
              <img src={search} alt="search" />
              <p>Search</p>
            </div>
            <p className="divider">|</p>

            <div className="header-contact">
              <img src={contact} alt="conta" />
              <p>Contact Us</p>
            </div>
          </div>
        </div>
      </header>
      <hr />
    </>
  );
};

export default Header;
