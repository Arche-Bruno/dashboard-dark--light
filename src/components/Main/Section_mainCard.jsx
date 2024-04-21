import React, { useState } from "react";

const Section_mainCard = ({ id, name, cant, porcentage, color }) => {


// Estado para el signo del porcentaje
const [signal, setSignal] = useState(porcentage[0]);

// Valor numérico del porcentaje
const value = porcentage.substring(1); // Elimina el primer carácter (el signo)



  const background = `radial-gradient(closest-side,#fff 79%, transparent 80% 100%), conic-gradient(${color} ${value}%, #e9e4ff 0%)`
  
  const style = {
    width: "100px",
    height: "100px", // Cambiado a minúscula

    background: background,


    borderRadius: "50%",
    
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };



  return (
    <div className="section_mainCard-container">
      <div className="section_mainCard-container-info">
       
        <span>{name}</span>
        <h2>${cant}</h2>
      </div>
      <div className="section_mainCard-container-porcentage">
        <div
          style={style} // Aplicando el objeto de estilos directamente aquí
          role="widgets-progress-bar"
          aria-valuenow={porcentage}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
        <div className="pocentage">{signal}{value}%</div>
      </div>
    </div>
  );
};

export default Section_mainCard;
