import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection1.css";
const Herosection1 = () => {
  return (
    <div className="hero1 d-flex align-item-center" id="home" >
      <div className="headerContent text-center container d-flex flex-column justify-content-center">
        <div>
          <div className="d-flex flex-column justify-content-center align-items-center text-center mt-5">
            <h1 className="mb-0 fw-bold text-white text-header mt-5">
              Contractors in New York
            </h1>
            <p className="mt-4 text-white fs-5 hero-para">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.
            </p>
            <Link
              to="#"
              className="btn btn-lg text-white esti-btn text-uppercase py-4 px-4 mt-3 mb-5 fw-bold "
            >
              Get a free estimate
            </Link>
            <div className="container my-lg-5 my-0">
              <div className="row align-items-center">
                <div className="col-12 col-md-4">
                  <div className="card border-0 bg-transparent mb-3">
                    <div className="card-body p-0 text-center">
                      <div className="card-icon text-white ">
                        <i className="material-icons">location_on</i>
                      </div>
                      <div className="lh-1 my-2 text-uppercase fw-bold des text-mu">
                        Our location
                      </div>
                      <p className="mb-0 text-white">New York State</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="card border-0 bg-transparent mb-3">
                    <div className="card-body p-0 text-center">
                      <div className="card-icon text-white">
                        <i className="material-icons">phone</i>
                      </div>
                      <div className="lh-1 my-2 text-uppercase fw-bold des">
                        Contact phone
                      </div>
                      <p className="mb-0 text-white">123-456-7890</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="card border-0 bg-transparent mb-3">
                    <div className="card-body p-0 text-center">
                      <div className="card-icon text-white">
                        <i className="material-icons">verified_user</i>
                      </div>
                      <div className="lh-1 my-2 text-uppercase fw-bold des ">
                        License number
                      </div>
                      <p className="mb-0 text-white"># 706109</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection1;
