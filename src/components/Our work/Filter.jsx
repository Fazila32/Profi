import React from "react";

const Projects = ({ items }) => {
  return (
    <div>
      <div className="row">
        {items.map((projectsItem) => {
          const { id, img } = projectsItem;
          return (
            <article
              key={id}
              className="border-0 col-12 col-md-6 col-lg-3 mt-4 text-center"
            >
              <img
                src={img}
                alt="Image Missing"
                className="photo text-center"
                height="250px"
              />
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
