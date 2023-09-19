import React, { useEffect,useState } from "react";
import Step6Bgr from "../components/Step6Bgr";
import { useApp } from "../context/state";
import NextStepButton from "../components/NextStepButton";
import AvatarCounter from "../components/AvatarCounter";
import BigAvatar from "../components/BigAvatar";
import gsap from "gsap";

const DecisionPrescription = () => {
  const { totalToken, setTotalToken } = useApp();
  const [state,setState]=useState("")
  const [overlayClass, setOverlayClass] = useState(false);

  useEffect(()=>{

    if  (parseInt(totalToken)>=15) {
      setState("happy")
    }else{
      setState("sad")
      setOverlayClass(true)
    }
    
    gsap.set(".big-img",{left:"20%"});
    gsap.set(".modal",{right:"10%"});

   
  })

  return (
    <div className="section-4 sec-13 ci-section">
         <div className={`section-bgr ${overlayClass ? 'overlay' : ''}`}>
         <Step6Bgr/>
        </div>
        <div className="avatar-counter avatar-counter-abs">
        <AvatarCounter />
      </div>
      <div className="left-col">
       <BigAvatar state={(parseInt(totalToken)>=15) ? "happy" : "sad"}/> 
      </div>
      <div className="right-col">
        <div className="modal-info">
          <div className="modal">
            { (parseInt(totalToken)>=15) && 
                      <h2>You Can Access Your Prescription!</h2>
            }
            { (parseInt(totalToken)<15) && 
                      <h2 className="font-red-color">You Can't Access Your Prescription!</h2>
            }
            <p className="medium-text">
                  Based on the social determinants of health you experienced, your total token balance is {totalToken} tokens.
            </p>
            <div className="cost-wrap">
              <div className="side left-side">
                  <h5 className="h5">Prescription cost</h5>
                  <p className="h3">15 tokens</p>
              </div>
              <div className={(parseInt(totalToken)>=15) ? "side right-side font-green-color" : "side right-side font-red-color"}>
                  <h5 className="h5">Your Balance</h5>
                  <p className="h3">{totalToken}</p>
              </div>
            </div>
          </div>
        </div>  
      </div>
      <NextStepButton value={"advance"}/>
    </div>
  );
};

export default DecisionPrescription;
