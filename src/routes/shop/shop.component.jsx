import React from "react";
import { Routes, Route } from "react-router";

import CategoriesPreview from "../categories-preview/categories-preview.component.jsx";
import Category from "../category/category.component.jsx";

import "./shop.styles.scss";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />}></Route>
      <Route path=":category" element={<Category />}></Route>
    </Routes>
  );
};

export default Shop;
