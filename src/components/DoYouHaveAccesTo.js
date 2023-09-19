import React from "react";
import { useApp } from "../context/state";
import { useState, useEffect, useRef } from "react";
import { gsap } from 'gsap';

const DoYouHaveAccessTo = () => {

    const {activeStep,setActiveStep} = useApp();
    let decisionPointValue = useApp()
    let sliderInput = React.useRef();
    
    const nextStep=()=>{
      const currentStepNumber = Number(activeStep.slice(-1));
      setActiveStep(`step${currentStepNumber + 1}`);
    }

  const sliderChange=(e)=>{
    if (e.currentTarget.value > 50){
      gsap.to(sliderInput.current,{value:95,duration:0.5,ease:"none"})
      decisionPointValue=90
      setTimeout(() => {
        nextStep();
      }, "600");
    } else if(e.currentTarget.value < 50 ){
      gsap.to(sliderInput.current,{value:5,duration:0.5,ease:"none"})
      decisionPointValue=10
      setTimeout(() => {
        nextStep();
      }, "600");
    }
    
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
            min="1"
            max="100"
            defaultValue="50"
            className="input-range"
            ref={sliderInput}
            onTouchEnd={(e)=>sliderChange(e)} onMouseUp={(e)=>sliderChange(e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoYouHaveAccessTo;