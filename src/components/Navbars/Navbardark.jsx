import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
const Navbardark = () => {
  return (
    <div>
      <div className="header-top-line darkcolor sticky-top  ">
        <div className="container">
          <div className="row">
            <nav className="navbar navbar-expand-sm navbar-dark navbar-short justify-content-between w-100 fw-bold ">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link text-white dropdown-toggle text-uppercase"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Landings
                  </Link>
                  <ul
                    className="dropdown-menu text-uppercase options lh-lg"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item text-white fw-bold" to="#">
                        Browse all
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-white fw-bold" to="#">
                        Message
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-white fw-bold" to="#">
                        Lawer
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-white fw-bold" to="#">
                        contractor
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-white fw-bold" to="#">
                        beauty
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-white fw-bold" to="#">
                        resturant
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link text-white dropdown-toggle text-uppercase"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Documentation
                  </Link>
                  <ul
                    className="dropdown-menu text-uppercase options lh-lg"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item text-white fw-bold" to="#">
                        introduction
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-white fw-bold" to="#">
                        buuild tools
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-white fw-bold" to="#">
                        customizing
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-white fw-bold" to="#">
                        components
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-white fw-bold" to="#">
                        plugins
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white text-uppercase" to="#">
                    Booking Form
                  </Link>
                </li>
              </ul>
              <span className="navbar-text text-uppercase d-flex align-items-center">
                <span className="text-white-70 mr-1">Call us today:</span>
                <span className="text-white mr-1 ">123-456-7890</span>
                <span>
                  <FaPhoneAlt size={10} className="text-white pr-1" />
                </span>
              </span>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbardark;
