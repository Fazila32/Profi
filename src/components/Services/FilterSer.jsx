import React from "react";

const Projects = ({ items }) => {
  return (
    <div>
      <div className="row">
        {items.map((projectsItem) => {
          const { id, img, name, des } = projectsItem;
          return (
            <article
              key={id}
              className="border-0 col-12 col-md-6 mt-5 d-flex flex-column flex-lg-row align-items-center bg-white ps-0"
            >
              <img
                src={img}
                alt="Missing"
                className="photo text-start"
                height="170px"
                width="170px"
              />
              <div className="d-flex flex-column my-3 my-lg-0 ms-2 ms-lg-5 text-capitalize service-data ">
                <div className="fw-bold fs-4 lh-4">{name}</div>
                <div>{des}</div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
