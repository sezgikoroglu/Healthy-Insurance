import React,{ useEffect}  from 'react';
import Step4Bgr from '../components/Step4Bgr';
import { useApp } from '../context/state';
import PopUpContext from '../components/PopUpContext';

const PopUpEnvironment = () => {

  const {currentPatient,setCurrentPatient} = useApp();
  const {nextStep}=useApp()

  useEffect(()=>{
    if(!currentPatient.environment.popUp) {
      nextStep()
    }
  },[])
  return (
    <PopUpContext  step={<Step4Bgr/>} modalTitle={currentPatient.environment.popUp.title}  modalContent={currentPatient.environment.popUp.content} belowLineContent={currentPatient.environment.popUp.belowLineContent} />
  )
}

export default PopUpEnvironment