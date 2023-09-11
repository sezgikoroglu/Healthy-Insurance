import React from 'react'
import GetTokenCta from './GetTokenCta'
import LoseTokenCta from './LoseTokenCta'

const TokenCta = () => {
  return (
    <div className='token-cta-wrap'>
        <GetTokenCta/>
        <LoseTokenCta/>
    </div>
  )
}

export default TokenCta

