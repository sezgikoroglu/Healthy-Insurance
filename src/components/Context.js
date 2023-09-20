import AvatarCounter from '../components/AvatarCounter';
import BigAvatar from '../components/BigAvatar';
import TokenCta from '../components/TokenCta';
import { gsap } from 'gsap/gsap-core';
import NextStepButton from '../components/NextStepButton';
import { useEffect,useState } from 'react';
import { CustomEase } from "gsap/CustomEase";

//gsap.registerPlugin(CustomEase);

const Context = ({step,stepNo, modalTitle, modalContent, tokens}) => {

     const [overlayClass, setOverlayClass] = useState(false);

    
    useEffect(()=>{
      
      gsap.set(".modal",{right:"-120%",duration:0.5});
      gsap.to(".modal",{right:"0",duration:0.5,delay:1,onComplete(){
        if(tokens<0){
          setTimeout(()=>{
            setOverlayClass(true)
          },500)
       
      }

      if(stepNo==="7"){
        
        gsap.set('.laptop-screen-title',{opacity:0,y:'-10'});
        gsap.set('.laptop-screen-content',{opacity:0,y:'-10'});
        gsap.set('.laptop-screen-icon',{opacity:0,y:'-10'});
        gsap.set('.laptop-screen-type-icon',{opacity:0,y:'-10'})

        if(parseInt(tokens) > 0){
          gsap.to('#laptop',{opacity:0,duration:0.7});
          gsap.to('#laptop-green',{opacity:1,duration:0.7});
          gsap.to('.laptop-backround',{duration:0.7, onComplete(){
            gsap.to('.laptop-backround',{duration:1,onComplete(){
					gsap.to('.laptop-screen-title',{opacity:1,duration:0.7,delay:0.2, y:'0'});
					gsap.to('.laptop-screen-content',{opacity:1,duration:0.7,delay:0.4,y:'0'});
					gsap.to('.laptop-screen-icon',{opacity:1,duration:0.7,delay:0.2,y:'0'});
					gsap.to('.laptop-screen-type-icon',{opacity:1,duration:0.7,delay:0.2,y:'0'});
				}});
			}});
        }

        if(parseInt(tokens)<0){
          gsap.to('#laptop',{opacity:0,duration:0.7,delay:1});
          gsap.to('#laptop-red',{opacity:1,duration:0.7,delay:1});
          gsap.to('.laptop-backround',{duration:0.7,delay:1, onComplete(){
          gsap.to('.laptop-backround',{duration:1,onComplete(){
					gsap.to('.laptop-screen-title',{opacity:1,duration:0.7,delay:0.5, y:'0'});
					gsap.to('.laptop-screen-content',{opacity:1,duration:0.7,delay:1.5,y:'0'});
					gsap.to('.laptop-screen-icon',{opacity:1,duration:0.7,delay:1,y:'0'});
					gsap.to('.laptop-screen-type-icon',{opacity:1,duration:0.7,delay:1,y:'0'});
				}});
			}});
        }
      }

      gsap.to(".next-btn-wrapper",{right:0,duration:1,delay:1.5,ease:"none"})
      }});
    },[])


    return (
      <section className="section-4 ci-section uk-animation-fade" >
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
              <p className='medium-text'>
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