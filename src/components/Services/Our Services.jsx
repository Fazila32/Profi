import React, { useState } from "react";
import Projects from "./FilterSer";
import Categories from "../Our work/Categories";
import items from "./DataSer";
import { Link } from "react-router-dom";
import "../Our work/ourWork.css";
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function OurServices() {
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
    <div className=" container-fluid WorkSection" id="services">
      <div className=" container">
        <div className="des text-muted fw-bold text-center text-lg-start text-uppercase">
          what we do the best
        </div>
        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between ">
          <h1 className="text-capitalize fw-bold">services</h1>
          <div>
            <Categories categories={categories} filterItems={filterItems} />
          </div>
        </div>
        <Projects items={WorkItems} />
        <div className="text-center">
          <Link
            to="#"
            className="btn btn-lg text-white esti-btn text-uppercase py-4 px-4  mt-5 fw-bold "
          >
            Get a free estimate
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
