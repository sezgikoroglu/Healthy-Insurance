import React, { useEffect } from 'react'
import { useApp } from '../context/state';
import { gsap } from 'gsap/gsap-core';

const BigAvatar = () => {
    const {currentPatient,setCurrentPatient} = useApp();
    const {activeStep}=useApp()

    // FİRTS TİME WİTH ANİMASYON, THE OTHER NO ANİMATİON(NO HAREKET)
    useEffect(()=>{

      if (activeStep==="step2"){
        console.log(activeStep)
        gsap.set(".big-img",{right:"20%",duration:0.5});
        gsap.to(".big-img",{right:"0",duration:0.5});
      }

      else if (activeStep==="step4"){
        console.log(activeStep)
        gsap.set(".big-img",{left:"-50%",duration:0.5});
        gsap.to(".big-img",{left:"20%",duration:0.5,delay:0.5});
      }
    },[currentPatient])

    return (
    <div className='big-avatar'>
        <img className='big-img' src={currentPatient.images.bigAvatar} alt="" />
    </div>
  )

}

export default BigAvatar