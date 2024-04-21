import React from "react";
import "./Right_seccionReminders.css";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { reminders } from "../../..";
import Right_seccionRemindersCard from "./Right_seccionRemindersCard/Right_seccionRemindersCard";

const Right_seccionReminders = () => {
  return (
    <div className="right_seccionReminders-container">
      <div className="right_seccionReminders-container-header">
        <h3>Reminders</h3>
        <div className="right_seccionReminders-container-icon">
        <NotificationsActiveIcon className="r_secction-icon"></NotificationsActiveIcon>
        </div>

      </div>
      <div className="right_seccionReminders-container-cards">
      {reminders.map((value, index) => (
        <Right_seccionRemindersCard
          key={index}
          id={index}
          icon_1={value.icon_1}
          name={value.name}
          subName={value.subName}
          icon_2={value.icon_2}
        ></Right_seccionRemindersCard>
      ))}
      </div>
 
    </div>
  );
};

export default Right_seccionReminders;
