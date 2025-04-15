import React, { useEffect } from 'react'
import '../../styles/dashboardCss/examBody.css'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import { LuClock2 } from 'react-icons/lu'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { cancelExam, nextQuestion, previousQuestion, setLeavingNow, setMockExamOption, theExamTimer } from '../../global/slice'
import LeavingNow from './LeavingNow'

const TheExam = () => {
    const mockExamQuestions = useSelector((state)=>state.mockExamQuestions)
    const mockExamOptions = useSelector((state)=>state.mockExamOptions)
    const examMeter = useSelector((state)=>state.examMeter)
    const examTimerMins = useSelector((state)=>state.examTimerMins)
    const examTimerSecs = useSelector((state)=>state.examTimerSecs)
    
  
    const dispatch = useDispatch()
    const nav = useNavigate()
    const {subject, subjectId} = useParams()
    const currentQuestion = mockExamQuestions?.find((item,index)=>index === parseInt(subjectId) -1)
    useEffect(()=>{
      const interval = setInterval(() => {
        dispatch(theExamTimer())
      }, 1000);
      return ()=> clearInterval(interval)
    },[examTimerSecs])
  return (
    <div className='examBody'>
      <div className="examBody-firstLayer">
        <h3>Jamb Mock Exam</h3>
        <aside>
        <meter min={0} max={100} value={examMeter}></meter>
        <p>{examMeter}%</p>
        </aside>
        <section><LuClock2 fontSize={30}/>{examTimerMins}:{examTimerSecs}</section>
        <button onClick={()=>dispatch(setLeavingNow())}>x</button>
      </div>
      <h1>QUESTIONS</h1>
      <div className="examBody-secondLayer">
        <div className="examBody-secondLayerHolder">
          <main>
            <h6>Question {subjectId}</h6>
            <h5>{currentQuestion?.question}</h5>
            <nav>
              <h4>A.</h4>
              <p>{currentQuestion?.options[0]}</p>
              <input type="radio" checked={mockExamOptions.optionA} onChange={()=>dispatch(setMockExamOption('A'))}/>
            </nav>
            <nav>
              <h4>B.</h4>
              <p>{currentQuestion?.options[1]}</p>
              <input type="radio" checked={mockExamOptions.optionB} onChange={()=>dispatch(setMockExamOption('B'))}/>
            </nav>
            <nav>
              <h4>C.</h4>
              <p>{currentQuestion?.options[2]} </p>
              <input type="radio" checked={mockExamOptions.optionC} onChange={()=>dispatch(setMockExamOption('C'))}/>
            </nav>
            <nav>
              <h4>D.</h4>
              <p>{currentQuestion?.options[3]}</p>
              <input type="radio" checked={mockExamOptions.optionD} onChange={()=>dispatch(setMockExamOption('D'))}/>
            </nav>
          </main>
        </div>
        <div className="examBody-secondLayerButton">
          <button style={{display:parseInt(subjectId) === 1 ? 'none' : 'flex'}} onClick={()=>{nav(`/${subject}/${parseInt(subjectId) - 1}`),dispatch(previousQuestion())}}>
            <article><FaArrowLeftLong /></article>
            <h2>Previous</h2>
          </button>
          <button style={{display:mockExamQuestions.length === parseInt(subjectId) ? 'none' : 'flex'}} onClick={()=>{nav(`/${subject}/${parseInt(subjectId) + 1}`),dispatch(nextQuestion()),dispatch(setMockExamOption('E'))}}>
          <h2>Next</h2>
          <article><FaArrowRightLong /></article>
          </button>
          <button style={{display:mockExamQuestions.length === parseInt(subjectId) ? 'flex' : 'none',background:'#804BF2',color:'white',borderColor:'#804BF2'}}>
          <h2>Finish</h2>
          </button>
        </div>
      </div>
    </div>
  )
}

export default TheExam
