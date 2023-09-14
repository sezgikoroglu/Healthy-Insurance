import React, { useEffect } from 'react'
import GetTokenCta from './GetTokenCta'
import LoseTokenCta from './LoseTokenCta'
import { useApp } from '../context/state'

const TokenCta = ({tokens}) => {

  const {totalToken,setTotalToken} = useApp();
  
  useEffect(()=>{
    setTimeout(() => {
      setTotalToken(parseInt(totalToken)+parseInt(tokens))
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

