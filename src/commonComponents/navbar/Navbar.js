import React from "react";
import "./Navbar.css";
import { Container, Row, Col } from "react-bootstrap";
import FlagIcon from "../../assets/flag.png";
import NotificationIcon from "../../assets/notification.png";
import AvatarIcon from "../../assets/avatar.png";
import LogoutIcon from "../../assets/logout.png";

function Navbar() {
  return (
    <>
    <div className="navbar">
      <Container>
        <div className="navbarHeading">
          <h2>Dashboard/List</h2>
        </div>
        <div className="navbarRight">
          <img src={FlagIcon} alt="" />
          <img src={NotificationIcon} alt="" />
          <img src={AvatarIcon} alt="" />
          <p>Jhon Doe</p>
          <img src={LogoutIcon} alt="" />
        </div>
      </Container>
    </div>
    </>
  );
}
export default Navbar;
