import React from "react";
import "./about.css";
import yelp from "../images/yelp.PNG";
import g from "../images/g.PNG";
import fb from "../images/fb.PNG";
import houzz from "../images/houzz.PNG";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const About = () => {
  const comp = [
    {
      id: 1,
      icon: <img src={yelp} alt="yelp icon" />,
      ratingDetails: "4.20 STARS ON YELP",
      rating: (
        <div>
          <FaStar size={20} style={{ color: "#FDB813" }} />
          <FaStar size={20} style={{ color: "#FDB813" }} />
          <FaStar size={20} style={{ color: "#FDB813" }} />
          <FaStarHalfAlt size={20} style={{ color: "#FDB813" }} />
        </div>
      ),
    },
    {
      id: 2,
      icon: <img src={g} alt="g icon" />,
      ratingDetails: "20 STARS ON google",
      rating: (
        <div>
          <FaStar size={20} style={{ color: "#FDB813" }} />
          <FaStar size={20} style={{ color: "#FDB813" }} />
          <FaStar size={20} style={{ color: "#FDB813" }} />
          <FaStar size={20} style={{ color: "#FDB813" }} />
        </div>
      ),
    },
    {
      id: 3,
      icon: <img src={houzz} alt="houzz icon" />,
      ratingDetails: "20 STARS ON houzz",
      rating: (
        <div>
          <FaStar size={20} style={{ color: "#FDB813" }} />
          <FaStar size={20} style={{ color: "#FDB813" }} />
          <FaStar size={20} style={{ color: "#FDB813" }} />
          <FaStar size={20} style={{ color: "#FDB813" }} />
        </div>
      ),
    },
    {
      id: 4,
      icon: <img src={fb} alt="fb icon" />,
      ratingDetails: "4.20 STARS ON facebook",
      rating: (
        <div>
          <FaStar size={20} style={{ color: "#FDB813" }} />
          <FaStar size={20} style={{ color: "#FDB813" }} />
          <FaStar size={20} style={{ color: "#FDB813" }} />
          <FaStarHalfAlt size={20} style={{ color: "#FDB813" }} />
        </div>
      ),
    },
  ];
  return (
    <div id="about" className="container-fluid bg-white about">
      <div className="container text-center">
        <small className="text-uppercase fw-bold des text-muted">
          general contractors in new york
        </small>
        <div className="mb-5 fw-bold font-heading">PROFI Contractors</div>
        <div className="row no-gutters mt-6 mt-md-10 mt-lg-17">
          <div className="col-12 col-lg-10 offset-0 offset-lg-1">
            <p>
              This is a great space to write long text about your company and
              your services. You can use this space to go into a little more
              detail about your company. Talk about your team and what services
              you provide. Tell your visitors the story of how you came up with
              the idea for your business and what makes you different from your
              competitors. Make your company stand out and show.
            </p>
          </div>
        </div>
        <div className="row">
          {comp.map((CompName) => (
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card border-0">
                <div className="card-body py-17 px-10 ">
                  <div className="  mb-5 set-border">
                    <div className="mb-3">{CompName.icon}</div>
                    <div className=" text-muted lh-1 fw-bold mb-3 mt-1 des ">
                      {CompName.ratingDetails}
                    </div>
                    <div className="text">{CompName.rating}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
