import React, { useEffect } from 'react'
import { useApp } from '../context/state';
import { gsap } from 'gsap/gsap-core';
import data from "../data";

const SmallAvatar = ({key,src,patient}) => {

  const {currentPatient,setCurrentPatient} = useApp();
  
  if(currentPatient){gsap.set(".small-avatar-wrap",{opacity:"0.5",duration:0.5});}

  return (
    <div key={key} className='small-avatar-wrap' onClick={()=>(setCurrentPatient(patient))}>
        <div className="inner-img-wrap">
            <img src={src} alt="" />
        </div>
    </div>
  )
}

export default SmallAvatar