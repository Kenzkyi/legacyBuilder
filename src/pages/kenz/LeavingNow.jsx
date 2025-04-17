import React, { useEffect } from 'react'
import '../../styles/dashboardCss/leavingNow.css'
import img1 from '../../assets/public/Quit Game.svg'
import { cancelExam, setLeavingNow, setUser } from '../../global/slice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const LeavingNow = () => {
    const nav = useNavigate()
    const dispatch = useDispatch()
    const {subject} = useParams()
    const examTimerMins = useSelector((state)=>state.examTimerMins)
    const examTimerSecs = useSelector((state)=>state.examTimerSecs)
    const exam = useSelector((state)=>state.exam)
    const user = useSelector((state)=>state.user)

    const quitExam = async()=>{
      const timeLeft = (examTimerMins*60) + examTimerSecs
   let duration = 0
   const completed = 'no'
   if (user?.plan === 'Freemium') {
    duration = 600 - timeLeft
  }else{
    duration = 1800 - timeLeft
  }
  const performance = exam.reduce((acc,item,index)=>{
    acc = acc + item.score
    return acc
  },0) 
  console.log(duration,completed,subject,performance)
  try {
    const res = await axios.put(`${import.meta.env.VITE_BASE_URL}api/v1/myRating/${user._id}`,{duration,completed,subject,performance})
    console.log(res)
    dispatch(setUser(res?.data?.data))
  } catch (error) {
    console.log(error)
  }
      // nav('/dashboard/mock-exam')
      // dispatch(setLeavingNow())
      // dispatch(cancelExam())
    }

    useEffect(()=>{
      quitExam()
    },[])

  return (
    <div className='leavingNow'>
      <div className="leavingNowHolder">
        <img src={img1} alt="" />
        <main>
            <h3>Leaving Now?  You Might Be Hurting Your Score</h3>
            <p>Quitting this mock exam early means missing important questions — and your final score could be much lower.</p>
            <nav>
                <button style={{background:'#804BF2',color:'white'}} onClick={()=>quitExam()}>Quit Anyway</button>
                <button style={{background:'white',color:'#804BF2'}} onClick={()=>dispatch(setLeavingNow())}>Stay in Exam</button>
            </nav>
        </main>
      </div>
    </div>
  )
}

export default LeavingNow
