import React from 'react'
import { useApp } from '../context/state';

const BigAvatar = () => {
    const {currentPatient,setCurrentPatient} = useApp();
  
    return (
    <div className='big-avatar'>
        <img src={currentPatient.images.bigAvatar} alt="" />
    </div>
  )

}

export default BigAvatar