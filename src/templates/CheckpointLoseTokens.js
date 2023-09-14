import React,{useEffect} from 'react';
import { useApp } from '../context/state';
import Step6Bgr from '../components/Step6Bgr';
import Context from '../components/Context';

const CheckPointLoseTokens = () => {
    
  const {currentPatient,setCurrentPatient}=useApp();
  const {nextStep}= useApp()

  useEffect(()=>{
    if(currentPatient.decisionPoint.loseTokens.tokens==="") {
      nextStep()
    }
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