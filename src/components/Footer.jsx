import React from "react";
import { BsFacebook, BsPinterest } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import ScrollTop from "./ScrollTop/ScrollTop";

const Footer = () => {
  return (
    <div>
      <div className="container my-5 py-4">
        <div className="d-flex align-items-center flex-column flex-md-row justify-content-md-between justify-content-center ">
          <div className="d-flex align-items-center">
            <div className="text-uppercase fw-bold fs-2">Profi</div>
            <div className="d-flex mx-3 mx-md-5">
              <BsFacebook size={25} style={{ color: "#3D5B99" }} />
              <AiFillTwitterCircle
                size={25}
                style={{ color: "#1DA1F2" }}
                className="ms-3"
              />
              <BsPinterest
                size={25}
                style={{ color: "rgb(189,8,28)" }}
                className="ms-3 "
              />
            </div>
          </div>
          <ScrollTop />
          <div className="d-flex align-items-center flex-column flex-md-row ">
            <div className="des text-muted fw-bold text-uppercase my-3 my-md-0">
              Privecy policy
            </div>
            <div className="des text-muted fw-bold text-uppercase ms-lg-5">
              terms and conditions
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
