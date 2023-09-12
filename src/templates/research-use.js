import React from 'react';
import Step3Bgr from "../components/Step3Bgr";
import Context from '../components/Context';
import { useApp } from '../context/state';

const ResearchUse = () => {
  const {currentPatient,setCurrentPatient}=useApp()
  return (
    <Context step={<Step3Bgr />}
    modalTitle={currentPatient.researchandUse.title} 
    tokens={currentPatient.researchandUse.tokens}
    modalContent={currentPatient.researchandUse.content}
    />  
  )
}

export default ResearchUse