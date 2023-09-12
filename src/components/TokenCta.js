import React from 'react'
import GetTokenCta from './GetTokenCta'
import LoseTokenCta from './LoseTokenCta'
import { useApp } from '../context/state'

const TokenCta = ({tokens}) => {

  const {totalToken,setTotalToken} = useApp();
  setTotalToken(totalToken+parseInt(tokens))

  return (
    <div className='token-cta-wrap'>
        <GetTokenCta tokens={tokens}/>
        <LoseTokenCta tokens={tokens}/>
    </div>
  )
}

export default TokenCta

