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


const AppContext = createContext();

const AppProvider = ({ children }) => {
    
    const Steps = {
        step1: { component: Open },
        step2: { component: AvatarSelection },
        step3: { component: Environment },
        step4: { component: PopUpEnvironment},
        step5: { component: ResearchUse},
        step6: { component: DecisionCheckpoint},
        step7: { component: CheckPointGetTokens},
        step8: { component: CheckPointLoseTokens},
        step9: { component: ResearchUse},
        step10:{ component: PopUpCheckpoint},
        step11:{ component: Prescription},
        step12:{ component: PopUpPrescription},
        step13:{ component: Close}
        
    }
    
    const [activeStep, setActiveStep] = useState('step1'); // Başlangıçta 'step1' olarak ayarlandı
    const ActiveStepComponent = Steps[activeStep].component;
    const values={activeStep,setActiveStep,ActiveStepComponent}
    
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