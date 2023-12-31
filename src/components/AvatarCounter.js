import React, { useEffect } from "react";
import { useApp } from "../context/state";
import { gsap } from 'gsap/gsap-core';
import CarIcon from '../assests/carIco';
import IncomeIcon from '../assests/incomeIcon';
import InsuranceStatusIcon from '../assests/insuranceStatusIcon';
import EnvironmentIcon from '../assests/environmentIcon';
import NutritionIcon from '../assests/nutritionIcon';
import HouseIcon from '../assests/houseIcon';
import DigitalDivideIcon from '../assests/digitalDivideIcon';

const AvatarCounter = ({tokens}) => {
  const { currentPatient, setCurrentPatient } = useApp();
  const {totalToken,setTotalToken} = useApp();

  useEffect(()=>{

        if (parseInt(tokens) > 0 ){
              gsap.to(".token-wrap",{border: '4px solid #3E944A' ,color: '#fff',backgroundColor:'#4DB95C',y: '-8px', duration:0.5,ease:'none',delay:1.8,onStart(){
                gsap.to(".avatar-determinants",{opacity:"0",visible:"hidden"})
              },onComplete(){
              gsap.to('.token-wrap', {borderColor: 'transparent', color: '#1E344B', backgroundColor:'white', y: '0px' , duration:0.5,delay:1,ease:'none'})
            }
              } )}
          else if (parseInt(tokens) < 0){
              gsap.to(".token-wrap",{border: '4px solid #A42F61' ,color: '#fff',backgroundColor: "#CC3A78",y: '-8px', duration:0.5,ease:'none',delay:1.8,onStart(){
                gsap.to(".avatar-determinants",{opacity:"0",visible:"hidden"})
              },onComplete(){
              gsap.to('.token-wrap', {borderColor: 'transparent', color: '#1E344B', backgroundColor:'white', y: '0px' , duration:0.5,delay:1,ease:'none'})}
            })
        }
  },[])
 
  return (
    <div className="token-wrap">
    
     
      <div className="avatar-counter-wrap ">
        <div className="left-side">
          <img
            className="avatar-img"
            width={64}
            height={64}
            src={currentPatient.images.smallAvatar}
          ></img>
          <p className="medium-text">{currentPatient.name}'s SDOH</p>
        </div>
        <div className="right-side">
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="2"
              y="2.69238"
              width="30"
              height="28.6154"
              rx="14.3077"
              fill="#F0A731"
            />
            <path
              d="M16.0341 9.36956C16.3381 8.46666 17.6619 8.46666 17.9659 9.36956L19.3943 13.6114C19.5302 14.0151 19.9202 14.2885 20.3602 14.2885H24.9824C25.9663 14.2885 26.3754 15.5034 25.5794 16.0614L21.8399 18.683C21.484 18.9325 21.335 19.3749 21.471 19.7787L22.8993 24.0205C23.2034 24.9234 22.1324 25.6742 21.3364 25.1162L17.597 22.4946C17.241 22.245 16.759 22.245 16.403 22.4946L12.6636 25.1162C11.8676 25.6742 10.7966 24.9234 11.1007 24.0205L12.529 19.7787C12.665 19.3749 12.516 18.9325 12.1601 18.683L8.42061 16.0614C7.62464 15.5034 8.03371 14.2885 9.01759 14.2885H13.6398C14.0798 14.2885 14.4698 14.0151 14.6057 13.6114L16.0341 9.36956Z"
              fill="#FFDA03"
            />
            <rect
              x="2"
              y="2.69238"
              width="30"
              height="28.6154"
              rx="14.3077"
              stroke="#F6E96F"
              stroke-width="4"
            />
          </svg>
          <div className="medium-text">{totalToken} tokens</div>
        </div>
      </div>
      
      <div className="avatar-determinants">
      <h3 className='h5 font-main-color'>PATIENT’S SOCIAL DETERMINANTS OF HEALTH</h3>
      <div className="determinant-row">
          <div className="determinant-img">
              <CarIcon/>
          </div>
          <div className="determinant-p">{currentPatient.socialDeterminants.transportation}</div>
      </div>
      <div className="determinant-row">
          <div className="determinant-img">
              <HouseIcon/>
          </div>
          <div className="determinant-p">{currentPatient?.socialDeterminants?.housing}</div>
      </div>
      <div className="determinant-row">
          <div className="determinant-img">
              <EnvironmentIcon/>
          </div>
          <div className="determinant-p">{currentPatient?.socialDeterminants?.environment}</div>
      </div>
      <div className="determinant-row">
          <div className="determinant-img">
              <NutritionIcon/>
          </div>
          <div className="determinant-p">{currentPatient?.socialDeterminants?.nutrition}</div>
      </div>
      <div className="determinant-row">
          <div className="determinant-img">
              <IncomeIcon/>
          </div>
          <div className="determinant-p">{currentPatient?.socialDeterminants?.income}</div>
      </div>
      <div className="determinant-row">
          <div className="determinant-img">
              <DigitalDivideIcon/>
          </div>
          <div className="determinant-p">{currentPatient?.socialDeterminants?.digitalDivide}</div>
      </div>
      <div className="determinant-row">
          <div className="determinant-img">
              <InsuranceStatusIcon/>
          </div>
          <div className="determinant-p">{currentPatient?.socialDeterminants?.insuranceStatus}</div>
      </div>
      </div>
    </div>
    
   

   
  );
};

export default AvatarCounter;
