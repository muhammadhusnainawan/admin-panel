import React from "react";
import "./Btn.css";
import { Button } from "react-bootstrap";
function Btn({size}) {
  return (
    <div className="button">
      <Button size={size}>Sign In</Button>
    </div>
  );
}

export default Btn;
