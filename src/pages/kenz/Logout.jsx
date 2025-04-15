import React from 'react'
import '../../styles/dashboardCss/logout.css'
import img1 from '../../assets/public/Log out.svg'
import { useDispatch, useSelector } from 'react-redux'
import { setLogout } from '../../global/slice'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const Logout = () => {
  const dispatch = useDispatch()
  const nav = useNavigate()
  const userToken = useSelector((state)=>state.userToken)
  const logoutUser = async()=>{
    try {
      const res = await axios.post(`${import.meta.env.VITE_BASE_URL}api/v1/logout`,{},{
        headers : {
          Authorization : `Bearer ${userToken}`
        }
      })
      toast.success(res?.data?.message)
      console.log(res)
    } catch (error) {
      toast.error(error?.response?.data?.message)
      console.log(error)
    }
    nav('/')
    dispatch(setLogout())
  }
  return (
    <div className='logout' onClick={()=>dispatch(setLogout())}>
      <div className="logoutHolder" onClick={(e)=>e.stopPropagation()}>
        <img src={img1} alt="" />
        <main>
            <h3>Ready to log out? </h3>
            <p>Keep the momentum going — we’ll be here when you’re back!</p>
            <nav>
              <button className='logout-btn' onClick={logoutUser}>Log out</button>
              <button className='continue-btn' onClick={()=>dispatch(setLogout())}>Continuing learning </button>
            </nav>
        </main>
      </div>
    </div>
  )
}

export default Logout
