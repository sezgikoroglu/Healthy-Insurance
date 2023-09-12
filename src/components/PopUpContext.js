import React,{useEffect} from 'react';
import { gsap } from 'gsap/gsap-core';
import AvatarCounter from '../components/AvatarCounter';
import BigAvatar from '../components/BigAvatar';
import NextStepButton from '../components/NextStepButton';

const PopUpContext = ({step, modalTitle, modalContent,belowLineContent}) => {
    
    useEffect(()=>{
        gsap.set(".modal",{right:"-120%",duration:0.5});
        gsap.to(".modal",{right:"10%",duration:0.5,delay:1});
      },[])
    
 
    return (
    <section className="section-4 ci-section">
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
            <p className='h2 content'>
              {modalContent}
            </p>
            <hr />
            <p className='below-content'>
            {belowLineContent}
            </p>
          </div>
        </div>
      </div>
      <NextStepButton value={"advance"}/>
    </section>
  )
}

export default PopUpContext