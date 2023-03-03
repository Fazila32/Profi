import React from "react";
import "./whyus.css";
import bg from "../images/image-24.jpg";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const WhyUs = () => {
  const keyValues = [
    {
      id: 1,
      values: "10 years of finishing projects on time and on budget",
    },
    {
      id: 2,
      values: "Easy to understand contracts",
    },
    {
      id: 3,
      values: "Knowledgeable project managers who help along the way",
    },
    {
      id: 4,
      values: "Modern design trends using high-quality materials",
    },
    {
      id: 5,
      values: "Long list of satisfied New York State clients",
    },
  ];
  return (
    <div className="section whyUs container-fluid" id="whyus">
      <div className=" text-center">
        <small className="des text-uppercase fw-bold text-muted">
          general contractors in new york
        </small>
        <div className="text-capitalize fw-bold font-heading">
          Why Choose Us
        </div>
      </div>

      <div className="row d-flex align-items-center px-0 mt-5">
        <div className="col-lg-5 col-12 text-center text-lg-start bg-white left position-absolute py-3 list-div">
          <div className="left-content px-5 ">
            {keyValues.map((ValName) => (
              <div className="char">
                <FaCheckCircle size="20" className="check me-2" />
                <span>{ValName.values}</span>
              </div>
            ))}
            <Link
              to="#"
              className="btn btn-lg text-white esti-btn text-uppercase  px-4 mt-3 mb-5 fw-bold "
            >
              Get a free estimate
            </Link>
          </div>
        </div>
        <div className="col-lg-12 col-0 d-lg-block d-none text-end image-to-hide">
          <img src={bg} alt="background" className="set-bg img-fluid me-0" />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
