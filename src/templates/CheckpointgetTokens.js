import React, { useEffect } from 'react'
import Step6Bgr from "../components/Step6Bgr";
import Context from '../components/Context';
import { useApp } from '../context/state';
import { gsap } from 'gsap/gsap-core';


const CheckPointGetTokens = () => {

  const {currentPatient,setCurrentPatient}=useApp()
  const {nextStep} = useApp()

  
  useEffect(()=>{

    if(currentPatient.decisionPoint.loseTokens.tokens==="") {
      nextStep()
    }

		gsap.to('#laptop-green',{opacity:1,duration:0.7,delay:1.2,onComplete(){
      gsap.to('#laptop',{opacity:0})
    }});
    
    
    
  },[])
  
  return (

     <Context step={<Step6Bgr />}
              tokens={currentPatient.decisionPoint.getTokens.tokens}
              modalTitle={currentPatient.decisionPoint.getTokens.title} 
              modalContent={currentPatient.decisionPoint.getTokens.content}
     />  
  
    )
}

export default CheckPointGetTokens