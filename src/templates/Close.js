import React,{useEffect, useState} from 'react'
import { useApp } from '../context/state'
import Step7Bgr from '../components/Step7Bgr'
import data from "../data";
import BigAvatar from '../components/BigAvatar';

const Close = () => {

  const {currentPatient,setCurrentPatien}=useApp()
  const [state,setState]=useState("")
  const step8 = data.steps.find(step => step.id === 'step8');
  const [html,setHtml]=useState("")

  useEffect(()=>{
    if(currentPatient.id === 'patient1' || (currentPatient.id === 'patient2') || (currentPatient.id === 'patient4' )){
        setHtml(step8.html.successful)
        setState("happy")
    }
    else{
        setHtml(step8.html.unsuccessfull)
        setState("sad")
    }
  },[])
  
  return (
    <>
      <section className=" ci-section close">
        <div className="section-bgr overlay-blue ">
          <Step7Bgr />
        </div>
        <BigAvatar state={state}/>
        <div className="modal-info ">
          <div className="modal">
          <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
    </section>
    </>
  )
}

export default Close