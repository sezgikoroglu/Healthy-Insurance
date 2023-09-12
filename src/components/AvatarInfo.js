import React, { useEffect } from 'react'
import { useApp } from '../context/state';
import CarIcon from '../assests/carIco';
import IncomeIcon from '../assests/incomeIcon';
import InsuranceStatusIcon from '../assests/insuranceStatusIcon';
import EnvironmentIcon from '../assests/environmentIcon';
import NutritionIcon from '../assests/nutritionIcon';
import HouseIcon from '../assests/houseIcon';
import DigitalDivideIcon from '../assests/digitalDivideIcon';
import { gsap } from 'gsap/gsap-core';

const AvatarInfo = () => {

  const {currentPatient,setCurrentPatient} = useApp();
  const {totalToken,setTotalToken} = useApp();

  useEffect(()=>{
    gsap.set(".avatar-info-wrap",{right:"-100%"});
    gsap.to(".avatar-info-wrap", {right:"0", duration:0.5,delay:0.5});

    setTotalToken(currentPatient.tokens.initial)
  },[currentPatient])
  
  return (
    <div className='avatar-info-wrap'>
        <div className="avatar-info">
            <div className="info-row">
                <h3 className='h5 font-main-color' >PATIENT NAME:</h3>
                <h4 className='h3'>{currentPatient.name}</h4>
            </div>
            <div className="info-row">
                <h3 className='h5 font-main-color'>PATIENT DESCRIPTION:</h3>
                <p>{currentPatient.description}</p>
            </div>
            <div className="info-row">
                <h3 className='h5 font-main-color'>PATIENT’S SOCIAL DETERMINANTS OF HEALTH:</h3>
                <div className="determinant-row">
                    <div className="determinant-img">
                        <CarIcon/>
                    </div>
                    <p>{currentPatient.socialDeterminants.transportation}</p>
                </div>
                <div className="determinant-row">
                    <div className="determinant-img">
                        <HouseIcon/>
                    </div>
                    <p>{currentPatient?.socialDeterminants?.housing}</p>
                </div>
                <div className="determinant-row">
                    <div className="determinant-img">
                        <EnvironmentIcon/>
                    </div>
                    <p>{currentPatient?.socialDeterminants?.environment}</p>
                </div>
                <div className="determinant-row">
                    <div className="determinant-img">
                        <NutritionIcon/>
                    </div>
                    <p>{currentPatient?.socialDeterminants?.nutrition}</p>
                </div>
                <div className="determinant-row">
                    <div className="determinant-img">
                        <IncomeIcon/>
                    </div>
                    <p>{currentPatient?.socialDeterminants?.income}</p>
                </div>
                <div className="determinant-row">
                    <div className="determinant-img">
                        <DigitalDivideIcon/>
                    </div>
                    <p>{currentPatient?.socialDeterminants?.digitalDivide}</p>
                </div>
                <div className="determinant-row">
                    <div className="determinant-img">
                        <InsuranceStatusIcon/>
                    </div>
                    <p>{currentPatient?.socialDeterminants?.insuranceStatus}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AvatarInfo