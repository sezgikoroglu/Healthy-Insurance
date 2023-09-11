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


const AppContext = createContext();

const AppProvider = ({ children }) => {
    
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
        step10: { component: ResearchUse},
        step11:{ component: PopUpCheckpoint},
        step12:{ component: Prescription},
        step13:{ component: PopUpPrescription},
        step14:{ component: Close}
        
    }
    
    const [activeStep, setActiveStep] = useState('step2'); // Başlangıçta 'step1' olarak ayarlandı
    const [currentPatient,setCurrentPatient]=useState();
    const ActiveStepComponent = Steps[activeStep].component;
    const [imageSrc, setImageSrc] = useState();
    const values={
    activeStep,setActiveStep,currentPatient,setCurrentPatient,ActiveStepComponent,imageSrc, setImageSrc
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