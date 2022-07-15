import React from "react";

const Button = ({ className, text, type }) => {
  return (
    <button type={type} className={`button ${className}`}>
      {text}
    </button>
  );
};

export default Button;
