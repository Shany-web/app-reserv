import React from "react";
import "./Button.css";

export const Button = ({
  children,
  style,
  variant = "primary",
  onClick,
  className = "",
}) => {
  return (
    <button
      className={`btn btn-${variant} ${className}`}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
};
