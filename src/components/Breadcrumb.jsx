import React from "react";

const Breadcrumb = () => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="/home">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="/product">Product</a>
        </li>
        <li className="breadcrumb-item">
          <a href="/brand">Brand</a>
        </li>
        <li className="breadcrumb-item">
          <a href="/brand/unbranded">Unbranded</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Jackets
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
