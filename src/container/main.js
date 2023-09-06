import React from 'react';
import { AppProvider, useApp} from "../context/state";

const Main = () => {

    const {ActiveStepComponent} = useApp();
  
    return (
    <div className='container'>
        <ActiveStepComponent/>
    </div>
  )
}

export default Main