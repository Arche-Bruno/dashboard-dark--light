import React from "react";
import "./Right_seccionRemindersCard.css"
const Right_seccionRemindersCard = ({ id, icon_1:ICON1, name, subName, icon_2:ICON2 }) => {
  return (
    <div className="r_seccionRemindersCard">
        <div className="r_seccionRemindersCard-icons">
             <ICON1 className="r_seccionRemindersCard-icon"></ICON1>
        </div>
        <div className="r_seccionRemindersCard-data">
            <h3>{name} </h3>
            <p>{subName} </p>
        </div>
        <div>
            <ICON2></ICON2>
        </div>
    </div>

  );
};

export default Right_seccionRemindersCard;
