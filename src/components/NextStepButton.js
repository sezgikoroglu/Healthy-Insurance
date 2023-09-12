import React, { useEffect } from 'react';
import ArrowCircleRight from "../assests/ArrowCircleRight";
import { gsap } from "gsap";
import { useApp } from "../context/state";

const NextStepButton = ({value}) => {

    const {activeStep,setActiveStep} = useApp();
    const {nextStep}= useApp()
    
    // const nextStep=()=>{
    //   if((activeStep!=="step10") && Number(activeStep.slice(-1))<=9 && !Number(activeStep.slice(-2))){
    //   const currentStepNumber = Number(activeStep.slice(-1));
    //   setActiveStep(`step${currentStepNumber + 1}`)
    //   }
    //   else if ( activeStep==="step10" || Number(activeStep.slice(-2))>10) {
    //   const currentStepNumber = Number(activeStep.slice(-2))
    //   setActiveStep(`step${currentStepNumber + 1}`)}

    // }

    useEffect(()=>{
        gsap.to(".next-btn-wrapper",{right:0,delay:2,duration:2,ease:"none"})
    },[])

  return (
    <div className='next-btn-wrapper' onClick={nextStep}>
        <span className="next-btn">{value}</span>
        <ArrowCircleRight/>
    </div>
  )
}

export default NextStepButton