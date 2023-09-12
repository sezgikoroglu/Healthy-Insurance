import React, { useEffect } from 'react'
import Step6Bgr from "../components/Step6Bgr";
import Context from '../components/Context';
import { useApp } from '../context/state';

const CheckPointGetTokens = () => {

  const {currentPatient,setCurrentPatient}=useApp()
  
  return (

     <Context step={<Step6Bgr />}
              tokens={currentPatient.decisionPoint.getTokens.tokens}
              modalTitle={currentPatient.decisionPoint.getTokens.title} 
              modalContent={currentPatient.decisionPoint.getTokens.content}
     />  
  
    )
}

export default CheckPointGetTokens