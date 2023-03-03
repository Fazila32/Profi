import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaRegClock } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const Social = () => {
  const links = [
    {
      id: 1,
      icon: <FaMapMarkerAlt size={30} className="text-muted" />,
      way: "by appointment only",
      details: "Mllerstrasse 57 8004 Zurich Switzerland",
    },
    {
      id: 2,
      icon: <FaPhoneAlt size={30} className="text-muted" />,
      way: "mobile phone",
      details: "+41 79 123 45 67 ",
    },
    {
      id: 3,
      icon: <FaRegClock size={30} className="text-muted" />,
      way: "working hours",
      details: "11:00 AM - 9:00 PM",
    },
    {
      id: 4,
      icon: <MdAlternateEmail size={30} className="text-muted" />,
      way: "email",
      details: "profi@mail.com",
    },
  ];
  return (
    <div className="container py-5">
      <div className="row">
        {links.map((linksName) => (
          <div className="col-12 col-md-6 col-lg-3 text-center">
            <div className="card border-0">
              <div className="card-body py-17 px-10 ">
                <div className="  mb-5 set-border">
                  <div className="mb-3">{linksName.icon}</div>
                  <div className=" text-muted lh-1 fw-bold mb-3 mt-1 des ">
                    {linksName.way}
                  </div>
                  <div className="text">{linksName.details}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Social;
