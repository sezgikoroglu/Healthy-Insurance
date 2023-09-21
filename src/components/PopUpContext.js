import React,{useEffect} from 'react';
import { gsap } from 'gsap/gsap-core';
import AvatarCounter from '../components/AvatarCounter';
import BigAvatar from '../components/BigAvatar';
import NextStepButton from '../components/NextStepButton';

const PopUpContext = ({step, modalTitle, modalContent,belowLineContent}) => {
    
    useEffect(()=>{
        gsap.set(".modal",{right:"-120%",duration:0.5});
        gsap.to(".modal",{right:"10%",duration:0.5,delay:1,onComplete(){
          gsap.to(".next-btn-wrapper",{right:0,duration:1,delay:0.2,ease:"none"})
        }});
      },[])
    
 
    return (
    <section className="section-4 ci-section uk-animation-fade">
      <div className="section-bgr">
        {step}
      </div>
      <div className="avatar-counter avatar-counter-abs">
        <AvatarCounter />
      </div>
      <div className="left-col">
        <BigAvatar state={"pensive"} />
      </div>
      <div className="right-col">
        <div className="modal-info">
          <div className="modal">
            <h1 className='h3'>{modalTitle}</h1>
            <div className='h2 content'>
              {modalContent}
            </div>
            <hr />
            <a className='below-content'>
            {belowLineContent}
            </a>
          </div>
        </div>
      </div>
      <NextStepButton value={"advance"}/>
    </section>
  )
}

export default PopUpContext