import React from 'react'
import { useApp } from '../context/state';

const SmallAvatar = ({key,src,patient}) => {

  const {currentPatient,setCurrentPatient} = useApp();
    
  return (
    <div key={key} className='small-avatar-wrap' onClick={()=>setCurrentPatient(patient)}>
        <div className="inner-img-wrap">
            <img src={src} alt="" />
        </div>
    </div>
  )
}

export default SmallAvatar