import React, { useState } from "react";
import Projects from "./Filter";
import Categories from "./Categories";
import items from "./data";
import "./ourWork.css";
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function OurWork() {
  const [WorkItems, setWorkItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setWorkItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setWorkItems(newItems);
  };

  return (
    <div className=" container-fluid WorkSection set-mt" id="ourwork">
      <div className=" container">
        <div className="des text-muted fw-bold text-center text-lg-start text-uppercase">
          Latest projects gallery
        </div>
        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between ">
          <div className="text-capitalize fw-bold font-heading">our work</div>
          <div>
            <Categories categories={categories} filterItems={filterItems} />
          </div>
        </div>
        <Projects items={WorkItems} />
      </div>
    </div>
  );
}

export default OurWork;
