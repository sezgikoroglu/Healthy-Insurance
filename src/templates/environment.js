import React, { useEffect } from 'react'
import Step1Bgr from "../components/Step1Bgr";
import AvatarCounter from '../components/AvatarCounter';
import BigAvatar from '../components/BigAvatar';
import TokenCta from '../components/TokenCta';
import { gsap } from 'gsap/gsap-core';

const Environment = () => {

  useEffect(()=>{
    gsap.set(".modal",{right:"-120%",duration:0.5});
    gsap.to(".modal",{right:"0",duration:0.5,delay:1});
  })
    
  return (
    <section className="section-4 ci-section">
      <div className="section-bgr">
        <Step1Bgr />
      </div>
      <div className="avatar-counter">
        <AvatarCounter />
      </div>
      <div className="left-col">
        <BigAvatar />
      </div>
      <div className="right-col">
        <div className="modal-info">
          <div className="modal">
            <h1>Environment</h1>
            <p>
              The city has implemented green energy strategies to address air
              and water pollution in your area, which help you live an active
              and healthy life.
            </p>
            <TokenCta/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Environment