import React from "react";

export const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h1>{title}</h1>
        <button>Shop Now</button>
      </div>
    </div>
  );
};
