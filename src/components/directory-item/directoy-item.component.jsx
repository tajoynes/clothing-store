import React from "react";
import { Link } from "react-router-dom";

import "./directory-item.styles.scss";

export const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="directory-item-body">
        <h1>{title}</h1>
        <Link to="shop">Shop Now</Link>
      </div>
    </div>
  );
};
