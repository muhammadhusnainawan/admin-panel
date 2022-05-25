import React from 'react'
import "./Sidebar.css";
import { sidebarData } from "../../../constants/sidebarData";
import logo from '../../../assets/LOGO.png'

function Sidebar() {
  return (
    <div className='mainContainer'>
      <img className='logo' src={logo} />
      <div className='subContainer'>
        {sidebarData.map((item, index) => {
          return (
            <div className='flex' key={index} >
              <img className='image' src={item.icon} alt="i" />
              {<div>{item.title}</div>}
            </div>
          );
        })}
      </div>
      <div className='footer'>
        <p className='title'>© Alfa Nova 2022</p>
        <p className='descripation'>Lorem ipsum dolar sit amet.Lorem ipsum dolar sit amet.</p>
      </div>
    </div>
  )
}
export default Sidebar

