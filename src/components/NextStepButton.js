import React, { useEffect } from 'react';
import ArrowCircleRight from "../assests/ArrowCircleRight";
import { gsap } from "gsap";
import { useApp } from "../context/state";

const NextStepButton = ({value}) => {

    const {activeStep, setActiveStep} = useApp()

    useEffect(()=>{
        gsap.to(".next-btn-wrapper",{right:0,delay:0.2,duration:1,ease:"none"})
    },[])

    const nextStep=()=>{
      if (value==="close"){setActiveStep(`step1`)}
      else{
      if((activeStep!=="step10") && Number(activeStep.slice(-1))<=9 && !Number(activeStep.slice(-2))){
      const currentStepNumber = Number(activeStep.slice(-1));
      setActiveStep(`step${currentStepNumber + 1}`)
      }
      else if ( activeStep==="step10" || Number(activeStep.slice(-2))>10) {
      const currentStepNumber = Number(activeStep.slice(-2))
      setActiveStep(`step${currentStepNumber + 1}`)}
    }
    }

  return (
    <div className='next-btn-wrapper' onClick={nextStep}>
        <span className="next-btn">{value}</span>
        <ArrowCircleRight/>
    </div>
  )
}

export default NextStepButton