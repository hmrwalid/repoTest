import React from "react";
import "./Footer.css";
import Arrow from '../../assets/assets_Homework_Front-End_01/path.png'
export const Footer = () => {
  return (
    <div className="footer">
      <div className="container footer-content">
        <div>
          <h1>GOT JOKES? GET PAID</h1>
          <h1>FOR SUBMITTING!</h1>
        </div>
        <h2 style={{color:"#cfb995"}}>SUBMIT JOKE <img src={Arrow} alt="arrow" /></h2>
      </div>
    </div>
  );
};
