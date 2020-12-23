import React, { useContext } from "react";
import "./Footer.css";
import { Fade } from "react-reveal";

export default function Footer() {
  return (
    <Fade bottom duration={1000} distance="5px">
      <div id="footer">
        <h5 className="footer-text">
          Made by Akshat Bansal
        </h5>
      </div>
    </Fade>
  );
}
