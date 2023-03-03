import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <span>
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className=" px-sm-4 des text-black cat-btn fw-bold text-uppercase"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </span>
  );
};

export default Categories;
