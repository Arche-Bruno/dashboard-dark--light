import React, { useState } from "react";
import "./Sidebar_card.css";
const Sidebar_card = ({
  name,
  icon: Icon,
  setIsSelected,
  id,
  isSelected,
  cant = "",
}) => {
  const [valueCant, setValueCant] = useState(cant);

  const handleClickSidebar = (id) => {
    setIsSelected(id);
  };
  return (
    <div
      className={`Sidebar_card-container ${
        isSelected === id ? "isSelected" : ""
      } `}
      onClick={() => handleClickSidebar(id)}
    >
      <div className="Sidebar_card-conatiner-icon">
        <Icon className="icon"></Icon>
      </div>
      <h3>{name}</h3>
      {valueCant != "" && <div className="icon-cant"><span>{cant}</span></div>}
    </div>
  );
};

export default Sidebar_card;
