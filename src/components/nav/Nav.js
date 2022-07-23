import React, { useState } from "react";
import "./Nav.css";
import User from ".././../assets/assets_Homework_Front-End_01/shape.png";
import Arrow from "../../assets/assets_Homework_Front-End_01/path_2.png";
export default function Nav() {
  const [hidden, setHidden] = useState(false);
  return (
    <nav>
      <div className="container menu">
        <ul className="item-menu">
          <li className="sofunktionierts list-item">SO FUNKTIONIERT'S</li>
          <li className="list-item">SONDERANGEBOTE</li>
          <li className="list-item" onClick={(e) => setHidden(!hidden)}>
            <img src={User} alt="user" />
            MEIN BEREICH
            <img src={Arrow} alt="arrow" />
          </li>
        </ul>
        {hidden ? (
          <div className="link">
            <ul className="link-items">
              <li className="list My-published-jokes">My published jokes</li>
              <li className="list">My saved jokes</li>
              <li className="list">Account Information</li>
              <li className="list">Publish new joke</li>
            </ul>
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
}
