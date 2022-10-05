import React from "react";
import Arrow from "../vectors/Arrow";

const DesignItem = ({ id, title, text, isOpen, fun }) => {
  return (
    <div className="design__content-conteiner">
      <div className={`design__item ${isOpen ? "open" : ""}`}>
        <div className="design__item-conteiner" onClick={() => fun(id)}>
          <h4 className={`design__item-title ${isOpen ? "open" : ""}`}>
            {title}
          </h4>
          <div>
            <Arrow className={`design__item-errow ${isOpen ? "open" : ""}`} />
          </div>
        </div>
      </div>
      <div
        className={`design__transcription-conteiner ${isOpen ? "open" : ""}`}
      >
        <p className="design__transcription">{text}</p>
      </div>
    </div>
  );
};

export default DesignItem;
