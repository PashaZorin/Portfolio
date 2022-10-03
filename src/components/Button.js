import React from "react";

const Button = ({ className, text, type }) => {
  return (
    <button
      type={type}
      className={className ? `button ${className}` : "button"}
    >
      {text}
    </button>
  );
};

export default Button;
