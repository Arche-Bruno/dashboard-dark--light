import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Aside from "./components/Aside/Aside";
import Section_main from "./components/Main/Section_main";
import Right_seccion from "./components/Right_seccion/Right_seccion";

import { DashboardContext } from "./components/context/DashboardContext";

function App() {
  const {modeDark} = useContext(DashboardContext)
  return (
    <div className={`container-app ${modeDark ? "dark-mode" :""}`}>
 
        <Aside></Aside>

        <div className="conatiner-main-right">
          <div className="container-main">
            <Section_main></Section_main>
          </div>

          <div className="container-right">
            <Right_seccion></Right_seccion>
          </div>
        </div>

    </div>
  );
}

export default App;
