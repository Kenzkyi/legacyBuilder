import React, { useEffect, useState } from 'react'
import Loading from '../../components/Loading'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const VerifyPayment = () => {
    const [isVerifying,setIsVerifying] = useState(true)
    const {reference} = useParams()

    const verifyPayment = async()=>{
      try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}api/v1/verifyKoraPay?reference=${reference}`)
        console.log(res?.data?.data?.student)
        console.log(res)
      } catch (error) {
        toast.error(error?.response?.data?.message)
        console.log(error)
      }
    }

    useEffect(()=>{
      verifyPayment()
    },[])
  return (
    <>
      {
        isVerifying ? <Loading/> : <div>Payment verified successfully</div>
      }
    </>
  )
}

export default VerifyPayment
