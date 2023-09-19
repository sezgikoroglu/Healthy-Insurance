import React, { useEffect } from 'react'
import GetTokenCta from './GetTokenCta'
import LoseTokenCta from './LoseTokenCta'
import { useApp } from '../context/state'
import gsap from 'gsap'

const TokenCta = ({tokens}) => {

  const {totalToken,setTotalToken} = useApp();
  
  useEffect(()=>{
    setTimeout(() => {
      setTotalToken(parseInt(totalToken)+parseInt(tokens))
      gsap.to(".next-btn-wrapper",{right:0,delay:0.2,duration:1,ease:"none"})
    },1800);

  },[])
  

  return (
    <div className='token-cta-wrap'>
        <GetTokenCta tokens={tokens}/>
        <LoseTokenCta tokens={tokens}/>
    </div>
  )
}

export default TokenCta

