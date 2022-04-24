import React, { Component } from "react";

import start from '../Node/images/start.png'; // pulling our images
import end from '../Node/images/end.png';
import weight from '../Node/images/weight.png';
import visitedWeight from '../Node/images/visitedWeight.png';
import pathWeight from '../Node/images/pathWeight.png';


import "./Legend.css";

export class Legend extends Component {

  componentDidMount() {
  document.addEventListener("DOMContentLoaded", function() {
    if (getCookie('visited') == null){
      showPopUp();
      console.log("h")
      setCookie('visited', true);
    }
    else {
      skipPopUp();
    }
  });
}
  render() { 
    return (
      <div className="PopUpTextBox">
        <header>
          <p>Welcome to Hare</p>
          <h3 onClick={skipPopUp}>x</h3>
        </header>

        <div className="PopUpIntroductionText">
          <h3>Create road blocks and slowdowns. Watch Hare find the shortest path!</h3>
          <div className="player">
            
            <label htmlFor="start">Place the Hare : </label>
            <img src={start} name="start" alt=""/>

            <label htmlFor="end">Place Carrot : </label>
            <img src={end} name="end" alt=""/>

            <label htmlFor="wall">Road Blocks : </label>
            <div style={{background:"black"}} name="wall"></div>

            <label htmlFor="wall">Checked Path : </label>
            <div style={{backgroundColor: 'rgba(0, 190, 218, 0.75)'}} name="wall"></div>

            <label htmlFor="weight">Slowdown : </label>
            <img src={weight} name="weight" alt=""/>

            <label htmlFor="visitedWeight">Visited Slowdown : </label>
            <img src={visitedWeight} name="visitedWeight" alt=""/>

            <label htmlFor="pathWeight">Untouched Slowdown : </label>
            <img src={pathWeight} name="pathWeight" alt=""/>

          </div>
          <div>

          </div>
        </div>

        <div className="skipBox">
          <small>*You can view this anytime by clicking on <span>[Hare]</span></small>
          <button onClick={skipPopUp}>Start</button>
        </div>

        
      </div>
    );
  }
}

export const skipPopUp = () => {
  const elem = document.querySelector(".PopUp");
  const pathfinderVisualizer = document.querySelector(".pathfinderVisualizer");
  elem.style.display = "none";
  pathfinderVisualizer.style.filter = "none";
};

export const showPopUp = () => {
  const elem = document.querySelector(".PopUp");
  const pathfinderVisualizer = document.querySelector(".pathfinderVisualizer");
  elem.style.display = "block";
  pathfinderVisualizer.style.filter = " blur(0px)";
};

///////////////////////////////////////////////////////////////////
function setCookie(name, value) {
  var cookie = name + "=" + escape(value) + ";";
  document.cookie = cookie;
}

function getCookie(name) {
  var chunks = document.cookie.split(";");
  for(var i=chunks.length; i--;){
      if(chunks[i].trim().split("=")[0].trim() === name){
          return chunks[i].trim().split("=")[1].trim();
      }
  }
  return null;
}