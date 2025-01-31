import React from "react";
@import "./button.css";

type ButtonProps = {
    text: string;
  };
  
  const Button: React.FC<ButtonProps> = ({ text }) => {
    return <button className="button">{text}</button>;
  };
  
  export default Button;

