import React, { useEffect, useState } from 'react'
import { useApp } from '../context/state';
import { gsap } from 'gsap/gsap-core';

const BigAvatar = ({state,tokens}) => {
    const {currentPatient,setCurrentPatient} = useApp();
    const {activeStep}=useApp()
    const {imageSrc, setImageSrc} = useApp();

    useEffect(()=>{
        
        if (state==="normal"){
          setImageSrc(currentPatient.images.bigAvatar)
        } else if( state==="happy"){
          setImageSrc(currentPatient.images.bigAvatarHappy)
        } else if( state==="sad"){
          setImageSrc(currentPatient.images.bigAvatarSad)
        } else if( state==="pensive"){
          setImageSrc(currentPatient.images.bigAvatarPensive)
        } else if( state==="rx"){
          setImageSrc(currentPatient.images.bigAvatarRx)
        }

    },[])

    useEffect(()=>{
      if (activeStep==="step2"){
        setImageSrc(currentPatient.images.bigAvatar)
        gsap.set(".big-img",{right:"20%",duration:0.5});
        gsap.to(".big-img",{right:"0",duration:0.5});
      }

      // else if (activeStep==="step4" || activeStep==="step5" || activeStep==="step6" || activeStep==="step8" || activeStep==="step9" || activeStep==="step12"){
      else{ 
        gsap.set(".big-img",{left:"-70%",duration:0.5});
        gsap.to(".big-img",{left:"20%",duration:0.5,delay:0.5});
        
          if(activeStep==="step4" || activeStep==="step6" || activeStep==="step8" || activeStep==="step9" || activeStep==="step11" ){
            setTimeout(() => {
              {if(parseInt(tokens)>0 ){
                setImageSrc(currentPatient.images.bigAvatarHappy)
              }
            
              else{
                setImageSrc(currentPatient.images.bigAvatarSad)
              }}
            },1800);
          }
      }
    },[currentPatient])

    return (
    <div className='big-avatar'>
        <img className='big-img' src={imageSrc} alt="" />
    </div>
  )

}

export default BigAvatar