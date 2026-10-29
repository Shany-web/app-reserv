import React from "react";

const Quality = (iconName = "", title = "", text = "") => {
  return (
    <div>
      <Icon name={iconName} size={28} decorative />
      <h4 quality-item__title>{title}</h4>
      <p>{text}</p>
    </div>
  );
};

export default Quality;
