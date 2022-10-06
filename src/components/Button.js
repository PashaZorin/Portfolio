import React from "react";
import { Link } from "react-scroll";

const Button = ({ className, text, url }) => {
  return (
    //<button
    //  type={type}
    //  className={className ? `button ${className}` : "button"}
    //>
    //  {text}
    //</button>
    <Link
      activeClass="active"
      to={url || "#"}
      spy={true}
      smooth={true}
      className={className ? `button ${className}` : "button"}
    >
      {text}
    </Link>
  );
};

export default Button;
