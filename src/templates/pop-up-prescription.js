import React,{ useEffect} from 'react'
import { useApp } from '../context/state';
import Step7Bgr from '../components/Step7Bgr';
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
     <PopUpContext   step={<Step7Bgr/>} 
                     modalTitle={currentPatient.receipt?.popUp?.title}  
                     modalContent={currentPatient.receipt?.popUp?.content} 
                     belowLineContent={currentPatient.receipt?.popUp?.belowLineContent}
     />
  )
}

export default PopUpPrescription