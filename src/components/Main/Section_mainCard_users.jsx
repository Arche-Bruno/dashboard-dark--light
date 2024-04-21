import React, { useEffect, useState } from "react";
import "./Section_mainCard_users.css";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
const Section_mainCard_users = ({ id, image, name, status }) => {
  const [isIcon, setIsIcon] = useState(false);
  useEffect(() => {
    if (typeof image === "string") {
      setIsIcon(true);
    }
  }, []);

  return (
    <div className="Section_mainCard_users-container">
      <div className="Section_mainCard_users-container-img">
        {isIcon ? (
          <img src={image} alt="imagen_users" />
        ) : (
          <div className="img-icon">
            <GroupAddIcon fontSize="large" className="icon"></GroupAddIcon>{" "}
          </div>
        )}
      </div>
      <div className="Section_mainCard_users-container-info">
        <span>{name} </span>
        <p>{status} </p>
      </div>
    </div>
  );
};

export default Section_mainCard_users;
