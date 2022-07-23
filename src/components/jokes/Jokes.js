import axios from 'axios';
import React, { useEffect } from 'react'
import "./Jokes.css";
import Arrow from '../../assets/assets_Homework_Front-End_01/path.png'
const Jokes = ({ title, body }) => {
 
  const joke = [
    {title:"LAWYER JOKE", body:"", button:""},
    {title:"DOCTOR JOKE", body:"", button:""},
    {title:"BUSINESS JOKE", body:"", button:""},
    {title:"DOCTOR JOKE", body:"", button:""},
    {title:"POLICE JOKE", body:"", button:""},
    {title:"BOSS JOKE", body:"", button:""},


  ]
  return (
    <>
    {joke.map((elm,i)=>{
      return(
   <div className="joke">
    <h2 className="joke-title">{elm.title}</h2>
    <p className="joke-body">{elm.body}</p>
    
    <h3 style={{color:"#cfb995"}}>SEE STATS <img src={Arrow} alt="arrow" /></h3>

  </div>
      )
    })}
    
  </>
  )
}

export default Jokes