import React from 'react'
import "./Button.css"
const Button = ({content}) => {
  return (
    <div
    className="button-container"
    onClick={() => {
      console.log("clicked");
    }}
  >
    <div className="btn">{content}</div>
  </div>
  )
}

export default Button