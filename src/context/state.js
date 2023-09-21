import React, { createContext, useContext, useState } from 'react';
import Open from '../templates/open';
import AvatarSelection from '../templates/avatarSelection';
import Environment from '../templates/environment';
import PopUpEnvironment from '../templates/pop-up-environment';
import ResearchUse from '../templates/research-use';
import DecisionCheckpoint from '../templates/decision-checkpoint';
import CheckPointGetTokens from "../templates/CheckpointgetTokens";
import CheckPointLoseTokens from "../templates/CheckpointLoseTokens";
import PopUpCheckpoint from '../templates/pop-up-checkpoint';
import Prescription from '../templates/prescription';
import PopUpPrescription from '../templates/pop-up-prescription';
import Close from '../templates/Close';
import EnvironmentPopUp from '../templates/environment-popUp';
import DecisionPrescription from '../templates/DecisionPrescription';

import data from "../data";

const AppContext = createContext();

const AppProvider = ({ children }) => {

    //silincek
    const patients=data.patients
    
    const Steps = {
        step1: { component: Open },
        step2: { component: AvatarSelection },
        step3: { component: EnvironmentPopUp},
        step4: { component: Environment },
        step5: { component: PopUpEnvironment},
        step6: { component: ResearchUse},
        step7: { component: DecisionCheckpoint},
        step8: { component: CheckPointGetTokens},
        step9: { component: CheckPointLoseTokens},
        step10:{ component: PopUpCheckpoint},
        step11:{ component: Prescription},
        step12:{ component: PopUpPrescription},
        step13:{ component: DecisionPrescription},
        step14:{ component: Close},
        
    }
    
    
    const [activeStep, setActiveStep] = useState('step1'); // Başlangıçta 'step1' olarak ayarlandı
    const [currentPatient,setCurrentPatient]=useState("");
    const ActiveStepComponent = Steps[activeStep].component;
    const [imageSrc, setImageSrc] = useState("");
    const [totalToken,setTotalToken]=useState();
    const decisionPointValue = null
    
    const nextStep=()=>{
        if((activeStep!=="step10") && Number(activeStep.slice(-1))<=9 && !Number(activeStep.slice(-2))){
        const currentStepNumber = Number(activeStep.slice(-1));
        setActiveStep(`step${currentStepNumber + 1}`)
        }
        else if ( activeStep==="step10" || Number(activeStep.slice(-2))>10) {
        const currentStepNumber = Number(activeStep.slice(-2))
        setActiveStep(`step${currentStepNumber + 1}`)}
  
      }

    const values={
    activeStep,setActiveStep,currentPatient,setCurrentPatient,ActiveStepComponent,imageSrc, setImageSrc, totalToken, setTotalToken, nextStep, decisionPointValue
    };
    
    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
};

const useApp = () => useContext(AppContext);

export {
    AppProvider , useApp
 }