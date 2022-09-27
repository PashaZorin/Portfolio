import React from "react";
import Arrow from "../vectors/Arrow";

const BtnSlider = ({ handlerNext, handlerPrev }) => {
  return (
    <div className="button__slider-conteiner">
      <button onClick={handlerPrev} className="button__slider-prev">
        <Arrow />
      </button>
      <button onClick={handlerNext} className="button__slider-next">
        <Arrow />
      </button>
    </div>
  );
};

export default BtnSlider;
