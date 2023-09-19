import AvatarCounter from '../components/AvatarCounter';
import BigAvatar from '../components/BigAvatar';
import TokenCta from '../components/TokenCta';
import { gsap } from 'gsap/gsap-core';
import NextStepButton from '../components/NextStepButton';
import { useEffect,useState } from 'react';

const Context = ({step, modalTitle, modalContent, tokens}) => {

     const [overlayClass, setOverlayClass] = useState(false);

    
    useEffect(()=>{
      
      gsap.set(".modal",{right:"-120%",duration:0.5});
      gsap.to(".modal",{right:"0",duration:0.5,delay:1,onComplete(){
        if(tokens<0){
        setOverlayClass(true)
      }
      gsap.to(".next-btn-wrapper",{right:0,duration:1,delay:1.5,ease:"none"})
      }});
    },[])


    return (
      <section className="section-4 ci-section">
        <div className={`section-bgr ${overlayClass ? 'overlay' : ''}`}>
          {step}
        </div>
        <div className=" avatar-counter avatar-counter-abs">
          <AvatarCounter tokens={tokens}/>
        </div>
        <div className="left-col">
          <BigAvatar state={"normal"}  tokens={tokens} />
        </div>
        <div className="right-col">
          <div className="modal-info">
            <div className="modal">
              <h1>{modalTitle}</h1>
              <p>
                {modalContent}
              </p>
              <TokenCta tokens={tokens}/>
            </div>
          </div>
        </div>
        <NextStepButton value={"advance"}/>
      </section>
    );
  };
  
  export default Context