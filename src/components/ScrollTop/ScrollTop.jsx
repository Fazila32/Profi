import React from "react";

import { AiOutlineArrowUp } from "react-icons/ai";

function ScrollTop() {
  const scrollUp = () => {
    window.scrollTo({
      top: 20,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <button
        className="scroll-top d-flex align-items-center justify-content-center border-0 bg-white"
        onClick={scrollUp}
      >
        <AiOutlineArrowUp size={25} className="text-muted" />
      </button>
    </div>
  );
}

export default ScrollTop;
