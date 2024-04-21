import React, { useContext, useState } from "react";
import logo from "../../images/logo/logo.jpg";
import "./Aside.css";
import LogoutIcon from "@mui/icons-material/Logout";
import { sidebarData } from "../..";
import Sidebar_card from "./Sidebar_card"
import CloseIcon from '@mui/icons-material/Close';
import { DashboardContext } from "../context/DashboardContext";

const Aside = () => {
  const [isSelected, setIsSelected] = useState(0);

  const {showMenu,setShowMenu}= useContext(DashboardContext)


const handleClose = ()=>{
  setShowMenu(false);

}
  return (
    <div className={`Aside-toggle ${showMenu ? "show":""}`}>
      
      <div className="Aside-logo">
        <div className="logo">
          <img src={logo} alt="logo-empresa" />
        </div>
        <div className="Aside-logo_name">
        <h2>plata</h2>
        <h2 className="logo-danger">nitos</h2>
        </div>
        <div className={`Aside-icon-close ${showMenu ? "show":"hide"} `} onClick={handleClose}>
        <CloseIcon></CloseIcon>
        </div>

      </div>
      <div className="Aside-sidebar">
        <div >
          {sidebarData.map((value, index) => (
            <Sidebar_card
              key={index}
              id={index}
              setIsSelected={setIsSelected}
              isSelected={isSelected}
              name={value.name}
              icon={value.icon}
              cant={value.cant}
            ></Sidebar_card>
          ))}
        </div>

        <div className="Aside-logout">
          <div>
            <LogoutIcon></LogoutIcon>
          </div>
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Aside;
