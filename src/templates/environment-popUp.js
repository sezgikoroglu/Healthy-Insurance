import React from "react";
import Step1Bgr from "../components/Step1Bgr";
import AvatarCounter from "../components/AvatarCounter";
import NextStepButton from "../components/NextStepButton";

const EnvironmentPopUp = () => {
  return (
    <section className="section-3 ci-section">
      <div className="section-bgr overlay">
        <Step1Bgr />
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
