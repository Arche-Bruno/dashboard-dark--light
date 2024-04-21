import React from 'react'
import "./Right_seccionLogo.css"
import logo from "../../../images/logo/logo.jpg"
const Right_seccionLogo = () => {
  return (
    <div className='right_seccionLogo-container'>

      <div className='right_seccionLogo-container-img'>
        <img src={logo} alt="imagen logo" />
      </div>
      <div className='right_seccionLogo-container-info'>
      <div className="Aside-logo_name">
        <h2>plata</h2>
        <h2 className="logo-danger">nitos</h2>
        </div>
      <span>Software Developer</span>
      </div>
      

    </div>
  )
}

export default Right_seccionLogo