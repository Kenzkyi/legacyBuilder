import React from 'react'
import '../../styles/dashboardCss/leavingNow.css'
import img1 from '../../assets/public/Quit Game.svg'
import { cancelExam, setLeavingNow } from '../../global/slice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const LeavingNow = () => {
    const nav = useNavigate()
    const dispatch = useDispatch()
  return (
    <div className='leavingNow'>
      <div className="leavingNowHolder">
        <img src={img1} alt="" />
        <main>
            <h3>Leaving Now?  You Might Be Hurting Your Score</h3>
            <p>Quitting this mock exam early means missing important questions — and your final score could be much lower.</p>
            <nav>
                <button style={{background:'#804BF2',color:'white'}} onClick={()=>{nav('/dashboard/mock-exam'),dispatch(setLeavingNow()),dispatch(cancelExam())}}>Quit Anyway</button>
                <button style={{background:'white',color:'#804BF2'}} onClick={()=>dispatch(setLeavingNow())}>Stay in Exam</button>
            </nav>
        </main>
      </div>
    </div>
  )
}

export default LeavingNow
