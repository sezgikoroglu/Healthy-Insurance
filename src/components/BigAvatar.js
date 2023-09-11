import React, { useEffect, useState } from 'react'
import { useApp } from '../context/state';
import { gsap } from 'gsap/gsap-core';

const BigAvatar = () => {
    const {currentPatient,setCurrentPatient} = useApp();
    const {activeStep}=useApp()
    const {imageSrc, setImageSrc} = useApp();

    useEffect(()=>{
      if (activeStep==="step2"){
        setImageSrc(currentPatient.images.bigAvatar)
        gsap.set(".big-img",{right:"20%",duration:0.5});
        gsap.to(".big-img",{right:"0",duration:0.5});
      }

      else if (activeStep==="step4"){
        gsap.set(".big-img",{left:"-50%",duration:0.5});
        gsap.to(".big-img",{left:"20%",duration:0.5,delay:0.5});
        
        setTimeout(() => {
          {if(parseInt(currentPatient.environment.tokens) > 0 ){
            setImageSrc(currentPatient.images.bigAvatarHappy)
          }
        
          else if(parseInt(currentPatient.environment.tokens) <= 0 ){
            setImageSrc(currentPatient.images.bigAvatarSad)
          }}
        },2000);

      }
    },[currentPatient])

    return (
    <div className='big-avatar'>
        <img className='big-img' src={imageSrc} alt="" />
    </div>
  )

}

export default BigAvatar