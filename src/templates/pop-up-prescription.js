import React,{ useEffect} from 'react'
import { useApp } from '../context/state';
import Step6Bgr from '../components/Step6Bgr';
import PopUpContext from '../components/PopUpContext';

const PopUpPrescription = () => {
  const {currentPatient,setCurrentPatient} = useApp();
  const {nextStep}=useApp()

  useEffect(()=>{
    if(!currentPatient.receipt.popUp) {
      nextStep()
    }
  },[])
 
  return (
     <PopUpContext   step={<Step6Bgr/>} 
                     modalTitle={currentPatient.receipt?.popUp?.title}  
                     modalContent={currentPatient.receipt?.popUp?.content} 
                     belowLineContent={currentPatient.receipt?.popUp?.belowLineContent}
     />
  )
}

export default PopUpPrescription