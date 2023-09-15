import React,{useEffect} from 'react';
import { useApp } from '../context/state';
import Step6Bgr from '../components/Step6Bgr';
import Context from '../components/Context';
import { gsap } from 'gsap/gsap-core';

const CheckPointLoseTokens = () => {
    
  const {currentPatient,setCurrentPatient}=useApp();
  const {nextStep}= useApp()

  useEffect(()=>{
    if(currentPatient.decisionPoint.loseTokens.tokens==="") {
      nextStep()
    }

    gsap.to('#step-6-bgr',{opacity:0.7,background:"linear-gradient(180deg, #1E344B 0%, rgba(30, 52, 75, 0.00) 100%)",duration:0.7,delay:1});
    gsap.to('#laptop-red',{opacity:1,duration:0.7,delay:1.2,onComplete(){
      gsap.to('#laptop',{opacity:0})
    }});
  },[])

  return (

     <Context step={<Step6Bgr />}
              tokens={currentPatient.decisionPoint.loseTokens.tokens }
              modalTitle={currentPatient.decisionPoint.loseTokens.title} 
              modalContent={currentPatient.decisionPoint.loseTokens.content}
     />  
  
    )
}

export default CheckPointLoseTokens