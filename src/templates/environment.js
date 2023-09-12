import React, { useEffect } from 'react'
import Step1Bgr from "../components/Step1Bgr";
import Context from '../components/Context';
import { useApp } from '../context/state';

const Environment = () => {
  const {currentPatient,setCurrentPatient}=useApp()
  return (
    <Context step={<Step1Bgr />}
              modalTitle={currentPatient.environment.title} 
              tokens={currentPatient.environment.tokens}
              modalContent={currentPatient.environment.content}
    />  
  );
};

export default Environment