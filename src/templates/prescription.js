import React from 'react'
import Context from '../components/Context'
import Step7Bgr from '../components/Step7Bgr'
import { useApp } from '../context/state'

const Prescription = () => {

  const {currentPatient,setCurrentPatient}=useApp()
  return (
  
     <Context step={<Step7Bgr />} stepNo="7"
              modalTitle={currentPatient.receipt.title} 
              tokens={currentPatient.receipt.tokens}
              modalContent={currentPatient.receipt.content}
     />  
  
  )
}

export default Prescription