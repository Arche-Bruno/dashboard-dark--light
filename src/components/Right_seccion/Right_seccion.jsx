import React from "react";
import "./Right_seccion.css";
import Right_seccionLogin from "./Right_seccionLogin/Right_seccionLogin";
import Right_seccionReminders from "./Right_seccionReminders/Right_seccionReminders";
import Right_seccionLogo from "./Right_seccionLogo/Right_seccionLogo";




const Right_seccion = () => {
  return (
    <div className="right_seccion-container">

       <Right_seccionLogin></Right_seccionLogin>
       <div className="right_seccion-container-logo-reminders">
       <Right_seccionLogo></Right_seccionLogo>
  
    
  <Right_seccionReminders></Right_seccionReminders>
       </div>
    
    </div>
  );
};

export default Right_seccion;
