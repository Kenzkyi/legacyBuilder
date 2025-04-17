import React, { useState } from 'react'
import Loading from '../../components/Loading'

const VerifyPayment = () => {
    const [isVerifying,setIsVerifying] = useState(true)
  return (
    <>
      {
        isVerifying ? <Loading/> : <div>Payment verified successfully</div>
      }
    </>
  )
}

export default VerifyPayment
