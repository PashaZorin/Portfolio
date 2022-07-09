import React from "react";
import Arrow from "../vectors/Arrow";

const DesignItem = ({ id, title, text, isOpen, fun }) => {
  return (
    <div className="design__item">
      <div className="design__item-conteiner" onClick={() => fun(id)}>
        <h4 className={`design__item-title ${isOpen ? "open" : ""}`}>
          {title}
        </h4>
        <Arrow className={`design__item-errow ${isOpen ? "open" : ""}`} />
      </div>
      <p className={`design__item-transcription ${isOpen ? "open" : ""}`}>
        {text}
      </p>
    </div>
  );
};

export default DesignItem;
