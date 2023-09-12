import React from "react";
import { useApp } from "../context/state";
import { useState, useEffect } from "react";
import { gsap } from 'gsap';

const DoYouHaveAccessTo = () => {

    const {activeStep,setActiveStep} = useApp();
    
    const nextStep=()=>{
      const currentStepNumber = Number(activeStep.slice(-1));
      setActiveStep(`step${currentStepNumber + 1}`);
    }

  const handleThumbClick = (event) => {
    console.log("event.clientX"+event.cli)
    const thumb = event.target;
    const newPosition = event.clientX <= thumb.getBoundingClientRect().left + thumb.offsetWidth / 2 ? 0 : 100;
    
    gsap.to(thumb, {
      value: newPosition,
      duration: 0.7,
      onComplete: () => {
        nextStep(); 
      },
    });
  }

  return (
    <div className="do-you-have modal-info">
      <div className="do-you-have-wrp modal ">
        <div className="do-you-have-top">
          <h4>Do You Have Access to</h4>
          <h1>A Provider and Screenings?</h1>
        </div>
        <div className="do-you-have-bottom">
          <h5>Swipe a direction & choose your path</h5>
          <div className="range-container">
            <input
            type="range"
            className="input-range"
            onMouseDown={handleThumbClick} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoYouHaveAccessTo;