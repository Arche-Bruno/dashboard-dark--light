import React, { useContext } from "react";
import "./Section_main.css";
import { rigthCardInfo, tableData, users } from "../..";
import Section_mainCard_users from "./Section_mainCard_users";
import Section_mainCard from "./Section_mainCard"
import Section_mainCard_Orders from "./Section_mainCard_Orders";
import MenuIcon from '@mui/icons-material/Menu';
import { DashboardContext } from "../context/DashboardContext";
const Section_main = () => {

  const {showMenu,setShowMenu} = useContext(DashboardContext);
  const handleMenu = ()=>{
    setShowMenu(true)
  }
  return (
    <div className="section_main-container">
      <h3>Analytics</h3>
      <div className="section_main-container-iconHamburguer" onClick={handleMenu}>
      <MenuIcon className="icon-hamburguer"></MenuIcon>
      </div>
    

      <div className="section_main-cards">
        {rigthCardInfo.map((value, index) => (
          <Section_mainCard
            key={index}
            id={index}
            name={value?.name}
            cant={value?.cant}
            porcentage={value?.porcentage}
            color={value?.color}
          ></Section_mainCard>
        ))}
      </div>

      <h3>New Users</h3>

      <div className="section_main_users">
        {users.map((value, index) => (
          <Section_mainCard_users
            key={index}
            id={index}
            image={value.image}
            name={value.name}
            status={value.status}
          ></Section_mainCard_users>
        ))}
      </div>
      <h3>Recent Orders</h3>

<div className="section_main_orders">
  <table>
    <thead>
   
      {tableData.map((value, index) => (
    <Section_mainCard_Orders
    key={index}
    id={index}
    course={value.course}
    number={value.number}
    pay={value.pay}
    status={value.status}
    details={value.details}
    ></Section_mainCard_Orders>
  ))}

  

    </thead>
  </table>
 
</div>
    </div>
  );
};

export default Section_main;
