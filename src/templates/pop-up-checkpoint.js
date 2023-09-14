import React, { useEffect } from 'react'
import Step6Bgr from '../components/Step6Bgr';
import { useApp } from '../context/state';
import PopUpContext from '../components/PopUpContext';
import NextStepButton from '../components/NextStepButton';

const PopUpCheckpoint = () => {
  const {currentPatient,setCurrentPatient} = useApp();
  const {nextStep}= useApp()

  useEffect(()=>{
    if(!currentPatient.decisionPoint.popUp) {
      nextStep()
    }
  },[])
  return (
    <>
              <PopUpContext   step={<Step6Bgr/>} 
                     modalTitle={currentPatient.decisionPoint?.popUp?.title}  
                     modalContent={currentPatient.decisionPoint?.popUp?.content} 
                     belowLineContent={currentPatient.decisionPoint?.popUp?.belowLineContent}
              />
   
    </>
  )
}

export default PopUpCheckpoint