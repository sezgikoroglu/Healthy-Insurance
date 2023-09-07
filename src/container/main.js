import React from 'react';
import { AppProvider, useApp} from "../context/state";

const Main = () => {

    const {ActiveStepComponent} = useApp();
  
    return (
    <main className='container'>
        <ActiveStepComponent/>
    </main>
  )
}

export default Main