import React,{useEffect, useState} from 'react'
import { useApp } from '../context/state'
import Step7Bgr from '../components/Step7Bgr'
import data from "../data";

const Close = () => {

  const {currentPatient,setCurrentPatien}=useApp()
  const step8 = data.steps.find(step => step.id === 'step8');
  const [html,setHtml]=useState("")

  useEffect(()=>{
    if(currentPatient.id === 'patient1' || (currentPatient.id === 'patient2') || (currentPatient.id === 'patient4' )){
        setHtml(step8.html.successful)
    }
    else{
        setHtml(step8.html.unsuccessfull)
    }
  },[])
  
  return (
    <>
      <section className="section-3 ci-section">
        <div className="section-bgr overlay-blue">
          <Step7Bgr />
        </div>
        <div className="modal-info">
          <div className="modal">
          <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
    </section>
    </>
  )
}

export default Close