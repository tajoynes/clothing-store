import React from "react";
import { DirectoryItem } from "../directory-item/directoy-item.component";

export const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};
