import React from "react";
import arrowDown from "../assets/icons/arrow-down.svg";
import fiveStar from "../assets/icons/5star.svg";
import fourStar from "../assets/icons/4star.svg";
import threeStar from "../assets/icons/3star.svg";
import twoStar from "../assets/icons/2star.svg";
import oneStar from "../assets/icons/1star.svg";
import ProductShelf from "./ProductShelf";

const Body = () => {
  return (
    <main className="body-container">
      <section className="main-left-container">
        <h4>Filters By:</h4>

        <div className="gender-container">
          <div className="gender-hero-text hero-text">
            <h4>Gender</h4>
            <img src={arrowDown} alt="arrowDown" />
          </div>
          <div className="gender-options-container options-container">
            <div className="gender-option option">
              <input
                type="checkbox"
                name="men"
                id="men"
                className="active-box"
              />
              <label htmlFor="men">Men</label>
            </div>
            <div className="gender-option option">
              <input type="checkbox" name="women" id="women" />
              <label htmlFor="men">Women</label>
            </div>
            <div className="gender-option option">
              <input type="checkbox" name="children" id="children" />
              <label htmlFor="men">Children</label>
            </div>
          </div>
        </div>

        <div className="category-container">
          <div className="category-hero-text hero-text">
            <h4>Category</h4>
            <img src={arrowDown} alt="arrowDown" />
          </div>

          <div className="category-options-container options-container">
            <div className="category-option option">
              <input type="checkbox" name="shirt" id="shirt" />
              <label htmlFor="shirt">Shirt</label>
            </div>
            <div className="category-option option">
              <input type="checkbox" name="pant-trousers" id="pant-trousers" />
              <label htmlFor="pant-trousers">Pant Trousers</label>
            </div>
            <div className="category-option option">
              <input type="checkbox" name="hoodie" id="hoodie" />
              <label htmlFor="hoodie">Hoodie</label>
            </div>
            <div className="category-option option">
              <input type="checkbox" name="hat" id="hoodie" />
              <label htmlFor="hat">Hat</label>
            </div>
            <div className="category-option option">
              <input type="checkbox" name="sweatshirt" id="sweatshirt" />
              <label htmlFor="sweatshirt">Sweatshirt</label>
            </div>
            <div className="category-option option">
              <input type="checkbox" name="jacket" id="jacket" />
              <label htmlFor="jacket">Jacket</label>
            </div>
          </div>
        </div>

        <div className="size-container">
          <div className="hero-text">
            <h4>Size</h4>
            <img src={arrowDown} alt="arrowDown" />
          </div>

          <div className="size-options-container">
            <div className="size-option">
              <p>XXS</p>
            </div>
            <div className="size-option">
              <p>XS</p>
            </div>
            <div className="size-option">
              <p>S</p>
            </div>
            <div className="size-option">
              <p>M</p>
            </div>
            <div className="size-option">
              <p>L</p>
            </div>
            <div className="size-option">
              <p>XL</p>
            </div>
            <div className="size-option">
              <p>XXL</p>
            </div>
          </div>
        </div>

        <div className="colour-container">
          <div className="hero-text">
            <h4>Colour</h4>
            <img src={arrowDown} alt="arrowDown" />
          </div>

          <div className="colour-options-container options-container">
            <div className="color01"></div>
            <div className="color02"></div>
            <div className="color03"></div>
            <div className="color04"></div>
            <div className="color05"></div>
            <div className="color06"></div>
          </div>
        </div>

        <div className="price-container">
          <div className="price-hero-text hero-text">
            <h4>Price</h4>
            <img src={arrowDown} alt="arrowDown" />
          </div>

          <div className="price-options-container options-container">
            <div className="price-range-text">
              <div className="lowest-price">
                <p>From</p>
                <input type="text" name="from" id="from" placeholder="$40" />
              </div>
              <p>-</p>
              <div className="highest-price">
                <p>To</p>
                <input type="text" name="to" id="to" placeholder="$2000" />
              </div>
            </div>
            <div className="price-range-slider"></div>
          </div>
        </div>

        <div className="rating-container">
          <div className="rating-hero-text hero-text">
            <h4>Ratings</h4>
            <img src={arrowDown} alt="arrowDown" />
          </div>

          <div className="rating-options-container options-container">
            <div className="rating-option option">
              <input type="checkbox" name="5-star" id="5-star" />
              <label htmlFor="5-star">
                <img src={fiveStar} alt="5 star" />
                <p>(300)</p>
              </label>
            </div>
            <div className="rating-option option">
              <input type="checkbox" name="4-star" id="4-star" />
              <label htmlFor="4-star">
                <img src={fourStar} alt="4 star" />
                <p>(400)</p>
              </label>
            </div>
            <div className="rating-option option">
              <input type="checkbox" name="3-star" id="3-star" />
              <label htmlFor="3-star">
                <img src={threeStar} alt="3 star" />
                <p>(500)</p>
              </label>
            </div>
            <div className="rating-option option">
              <input type="checkbox" name="2-star" id="2-star" />
              <label htmlFor="2-star">
                <img src={twoStar} alt="2 star" />
                <p>(55)</p>
              </label>
            </div>

            <div className="rating-option option">
              <input type="checkbox" name="1-star" id="1-star" />
              <label htmlFor="1-star">
                <img src={oneStar} alt="1 star" />
                <p>(2)</p>
              </label>
            </div>
          </div>
        </div>

        <button className="btn">Apply Filter</button>
      </section>

      <section className="main-right-container">
        <ProductShelf />
      </section>
    </main>
  );
};

export default Body;
