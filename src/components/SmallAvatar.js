import React, { useEffect, useState } from 'react'
import { useApp } from '../context/state';
import { gsap } from 'gsap/gsap-core';
import data from "../data";

const SmallAvatar = ({key,src,patient,className}) => {

  const {currentPatient,setCurrentPatient} = useApp();
  const patients=data.patients

  const ChoosePatient=(patient)=>{
    if(patient==="random"){
      setCurrentPatient(patients[Math.floor(Math.random()*5)])
    } else {
      setCurrentPatient(patient)
    }
  }

  return (
    <div key={key}  className={ className +" "+ "small-avatar-wrap"} onClick={()=>(ChoosePatient(patient))}>
        <div className="inner-img-wrap">
            <img src={src} alt="" />
        </div>
    </div>
  )
}

export default SmallAvatar