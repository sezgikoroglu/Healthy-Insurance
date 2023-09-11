import React,{useEffect} from 'react';
import Step1Bgr from '../components/Step1Bgr';
import AvatarCounter from '../components/AvatarCounter';
import BigAvatar from '../components/BigAvatar';
import NextStepButton from '../components/NextStepButton';
import { useApp } from '../context/state';
import { gsap } from 'gsap/gsap-core';

const PopUpEnvironment = () => {

  const {currentPatient,setCurrentPatient} = useApp();
  useEffect(()=>{
    gsap.set(".modal",{right:"-120%",duration:0.5});
    gsap.to(".modal",{right:"6½",duration:0.5,delay:1});
  },[])

  return (
    <section className="section-4 ci-section">
      <div className="section-bgr">
        <Step1Bgr />
      </div>
      <div className="avatar-counter">
        <AvatarCounter />
      </div>
      <div className="left-col">
        <BigAvatar  />
      </div>
      <div className="right-col">
        <div className="modal-info">
          <div className="modal">
            <h1 className='h3'>{currentPatient.environment.popUp.title}</h1>
            <p className='h2 content'>
              {currentPatient.environment.popUp.content}
            </p>
            <hr />
            <p className='below-content'>
            {currentPatient.environment.popUp.belowLineContent}
            </p>
          </div>
        </div>
      </div>
      <NextStepButton value={"advance"}/>
    </section>
  )
}

export default PopUpEnvironment