import React, {useEffect} from "react";
import Step4Bgr from "../components/Step4Bgr";
import AvatarCounter from "../components/AvatarCounter";
import NextStepButton from "../components/NextStepButton";
import { useApp } from '../context/state';

const EnvironmentPopUp = () => {

  const {currentPatient,setCurrentPatient}=useApp()
  const {totalToken,setTotalToken} = useApp();


  useEffect(()=>{
    if (isNaN(parseInt(currentPatient.tokens.initial))) {
         setTotalToken(0)
    } 
   },[])

  return (
    <section className="section-3 ci-section">
      <div className="section-bgr overlay">
        <Step4Bgr />
      </div>
      <div className="modal-info">
        <AvatarCounter/>
        <div className="modal">
          <p className="large-text">
            In this simulation, a patient’s tokens represent the social
            advantages (or disadvantages) to accessing a prescribed medicine.
            More tokens are indicative of a higher likelihood the patient can
            access a prescribed medicine.
          </p>
        </div>
      </div>
      <NextStepButton value={"continue"}/>
    </section>
  );
};

export default EnvironmentPopUp;
