import React from "react";
import "./testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import img1 from "../images/yelp.PNG";
import g from "../images/g.PNG";
import fb from "../images/fb.PNG";
import houzz from "../images/houzz.PNG";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
const Testimonial = () => {
  return (
    <div className="testimonial-sec container-fluid" id="testimonial">
      <div className="container">
        <div className="des text-muted fw-bold text-center text-lg-start text-uppercase ">
          some reviews from our clints
        </div>
        <div className="text-capitalize font-heading  text-center text-lg-start fw-bold">
          testimonials
        </div>
      </div>
      <div className="ms-md-5 ms-0">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 50,
            },
          }}
          grabCursor={true}
          className="portfolio-slider ms-5"
        >
          <SwiperSlide>
            <div className="d-flex flex-column test-cards">
              <div className="mx-5">
                <div className="d-flex my-5 flex-column flex-md-row">
                  <img
                    src={img1}
                    alt=""
                    height="50px"
                    width="60px"
                    className="img-fluid"
                  />
                  <div className="d-flex flex-column">
                    <h4 className="text-black">Pamela P.</h4>
                    <span>Bathroom Reomodling</span>
                  </div>
                </div>
                <div>
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Asperiores nemo reprehenderit corrupti maxime, fugiat
                  architecto eaque id alias atque consequatur laborum, ea ullam
                  sequi.""
                </div>
                <div className="my-5">
                  <FaStar size={20} style={{ color: "#FDB813" }} />
                  <FaStar size={20} style={{ color: "#FDB813" }} />
                  <FaStar size={20} style={{ color: "#FDB813" }} />
                  <FaStarHalfAlt size={20} style={{ color: "#FDB813" }} />
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* .................2nd slide.................. */}
          <SwiperSlide>
            <div className="d-flex flex-column test-cards">
              <div className="mx-5">
                <div className="d-flex my-5 flex-column flex-md-row">
                  <img
                    src={houzz}
                    alt=""
                    height="50px"
                    width="60px"
                    className="img-fluid"
                  />
                  <div className="d-flex flex-column">
                    <h4 className="text-black">Tammara</h4>
                    <span>Kitchen Reomodling</span>
                  </div>
                </div>
                <div>
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Asperiores nemo reprehenderit corrupti maxime, fugiat
                  architecto eaque id alias atque consequatur laborum, ea ullam
                  sequi.""
                </div>
                <div className="my-5">
                  <FaStar size={20} style={{ color: "#FDB813" }} />
                  <FaStar size={20} style={{ color: "#FDB813" }} />
                  <FaStar size={20} style={{ color: "#FDB813" }} />
                  <FaStar size={20} style={{ color: "#FDB813" }} />
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* ...............slide 3 */}
          <SwiperSlide>
            <div className="d-flex flex-column test-cards">
              <div className="mx-5">
                <div className="d-flex my-5 flex-column flex-md-row">
                  <img
                    src={fb}
                    alt=""
                    height="50px"
                    width="60px"
                    className="img-fluid"
                  />
                  <div className="d-flex flex-column">
                    <h4 className="text-black">David J.</h4>
                    <span>Roofing</span>
                  </div>
                </div>
                <div>
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Asperiores nemo reprehenderit corrupti maxime, fugiat
                  architecto eaque id alias atque consequatur laborum, ea ullam
                  sequi.""
                </div>
                <div className="my-5">
                  <FaStar size={20} style={{ color: "#FDB813" }} />
                  <FaStar size={20} style={{ color: "#FDB813" }} />
                  <FaStar size={20} style={{ color: "#FDB813" }} />
                  <FaStarHalfAlt size={20} style={{ color: "#FDB813" }} />
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* .................4th slide.................. */}
          <SwiperSlide>
            <div className="d-flex flex-column test-cards">
              <div className="mx-5">
                <div className="d-flex my-5 flex-column flex-md-row">
                  <img
                    src={g}
                    alt=""
                    height="50px"
                    width="60px"
                    className="img-fluid"
                  />
                  <div className="d-flex flex-column">
                    <h4 className="text-black">James B.</h4>
                    <span>Painting</span>
                  </div>
                </div>
                <div>
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Asperiores nemo reprehenderit corrupti maxime, fugiat
                  architecto eaque id alias atque consequatur laborum, ea ullam
                  sequi.""
                </div>
                <div className="my-5">
                  <FaStar size={20} style={{ color: "#FDB813" }} />
                  <FaStar size={20} style={{ color: "#FDB813" }} />
                  <FaStar size={20} style={{ color: "#FDB813" }} />
                  <FaStar size={20} style={{ color: "#FDB813" }} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
