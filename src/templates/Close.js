import React,{useEffect, useState} from 'react'
import { useApp } from '../context/state'
import Step7Bgr from '../components/Step7Bgr'
import data from "../data";
import BigAvatar from '../components/BigAvatar';
import gsap from 'gsap';
import NextStepButton from '../components/NextStepButton';

const Close = () => {

  const {currentPatient,setCurrentPatient}=useApp()
  const [state,setState]=useState("")
  const step8 = data.steps.find(step => step.id === 'step8');
  const [html,setHtml]=useState("")

  useEffect(()=>{

    if(currentPatient.id === 'patient4' || currentPatient.id === 'patient1' || currentPatient.id === 'patient2'  ){
      setHtml(step8.html.successful);
    }
    else{
      setHtml(step8.html.unsuccessful);
    }
    
    gsap.set(".big-avatar",{left:"-150%",duration:0.5});
    gsap.to(".big-avatar",{left:"5%",duration:0.5,delay:0.5}); 

    //4 ve 2 de üzgün surat geliyo
  },[])
  
  return (
    <>
      <section className=" ci-section close">
        <div className="section-bgr overlay-blue ">
          <Step7Bgr />
        </div>
        <BigAvatar state={(currentPatient.id === 'patient4' || 'patient1' ||'patient2')? "happy" : "sad" }/>
        <div className="modal-info ">
          <div className="modal">
          <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
        <NextStepButton value={"close"}/>
    </section>
    </>
  )
}

export default Close