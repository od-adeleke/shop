import React from "react";
import Card from "./Card";

const ProductShelf = () => {
  const shelfData = [
    {
      title: "Unbranded Puffer Jacket High Quality",
      price: 300,
      like: "../assets/icons/heart02.svg",
      photoName: "product-img/01.png",
      colour01: "#2196F3",
      colour02: "#E88A00",
      colour03: "#fff",
      colour04: "#868686",
      colour05: "#CCCCCC",
      colour06: "#272727",
    },
    {
      title: "Unbranded Summer Jacket Hoodie",
      price: 235,
      like: "../assets/icons/heart.svg",
      photoName: "product-img/02.png",
      colour01: "#2196F3",
      colour02: "#E88A00",
      colour03: "#fff",
      colour04: "#AA9F99",
      colour05: "#000",
      colour06: "#6E767E",
    },
    {
      title: "Unbranded Turtle-Neck",
      price: 97,
      like: "../assets/icons/heart02.svg",
      photoName: "product-img/03.png",
      colour01: "#2196F3",
      colour02: "#E88A00",
      colour03: "#fff",
      colour04: "#868686",
      colour05: "#000",
      colour06: "#AA9F99",
    },
    {
      title: "Unbranded Shaffy Jacket with Hoodie",
      price: 123,
      like: "../assets/icons/heart02.svg",
      photoName: "product-img/04.png",
      colour01: "#2196F3",
      colour02: "#E88A00",
      colour03: "#fff",
      colour04: "#AA9F99",
      colour05: "#000",
      colour06: "#6E767E",
    },
    {
      title: "Unbranded Summer Jacket Hoodie",
      price: 235,
      like: "../assets/icons/heart02.svg",
      photoName: "product-img/05.png",
    },
    {
      title: "Unbranded Puffer Jacket with Hoodie",
      price: 200,
      like: "../assets/icons/heart02.svg",
      photoName: "product-img/06.png",
    },
    {
      title: "Unbranded Threadmill Jacket Comfy",
      price: 112,
      like: "../assets/icons/heart02.svg",
      photoName: "product-img/07.png",
    },
    {
      title: "Unbranded Zip Up Texture Style",
      price: 99,
      like: "../assets/icons/heart02.svg",
      photoName: "product-img/08.png",
    },
    {
      title: "Unbranded Orange Zip Down Flat Style",
      price: 99,
      like: "../assets/icons/heart02.svg",
      photoName: "product-img/09.png",
    },
    {
      title: "Unbranded x Zara Collab Full Kit Coat",
      price: 766,
      like: "../assets/icons/heart02.svg",
      photoName: "product-img/10.png",
    },
    {
      title: "Unbranded Open Neck Comfy Jacket",
      price: 237,
      like: "../assets/icons/heart.svg",
      photoName: "product-img/11.png",
    },
    {
      title: "Unbranded Puffer Jacket High Quality",
      price: 300,
      like: "../assets/icons/heart.svg",
      photoName: "product-img/01.png",
    },
  ];

  const shelf = shelfData.length;

  return (
    <main className="product-page">
      <section className="cards-container">
        {shelf > 0 ? (
          <>
            <ul className="card-list">
              {shelfData.map((cardObj) => (
                <Card cardObj={cardObj} key={cardObj.title} />
              ))}
            </ul>
          </>
        ) : null}
      </section>
    </main>
  );
};

export default ProductShelf;
