import React from "react";

const Button = ({ className, text }) => {
  return <button className={`button ${className}`}>{text}</button>;
};

export default Button;
