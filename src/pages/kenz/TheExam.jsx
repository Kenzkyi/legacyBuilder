import React, { useEffect, useState } from 'react'
import '../../styles/dashboardCss/examBody.css'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import { LuClock2 } from 'react-icons/lu'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { cancelExam, nextQuestion, previousQuestion, setFinishedExam, setLeavingNow, setMockExamOption, theExamTimer } from '../../global/slice'

const TheExam = () => {
    const mockExamQuestions = useSelector((state)=>state.mockExamQuestions)
    const mockExamOptions = useSelector((state)=>state.mockExamOptions)
    const examMeter = useSelector((state)=>state.examMeter)
    const examTimerMins = useSelector((state)=>state.examTimerMins)
    const examTimerSecs = useSelector((state)=>state.examTimerSecs)
    const exam = useSelector((state)=>state.exam)
    const [isNext,setIsNext] = useState(false)
    // console.log(mockExamOptions,exam)
    
    
    const dispatch = useDispatch()
    const nav = useNavigate()
    const {subject, subjectId} = useParams()
    const num = Number(subjectId)
    // console.log(exam[num -1]?.option,exam[num - 1]?.answer)
    const currentQuestion = mockExamQuestions?.find((item,index)=>index === num -1)
    // console.log(currentQuestion)
    useEffect(()=>{
      const interval = setInterval(() => {
        dispatch(theExamTimer())
      }, 1000);
      return ()=> clearInterval(interval)
    },[examTimerSecs])

    const previousExam = ()=>{
      dispatch(setMockExamOption({option:exam[num - 2]?.option,answer:exam[num - 2]?.answer}))
      nav(`/mock-exam/${subject}/${num - 1}`)
      dispatch(previousQuestion())}
    

    const nextExam = ()=>{
      dispatch(nextQuestion({answer:currentQuestion?.answer,subjectId}))
      nav(`/mock-exam/${subject}/${num + 1}`)
      if (exam.length > subjectId) {
        dispatch(setMockExamOption({option:exam[num ]?.option,answer:exam[num ]?.answer}))
      }else{
        dispatch(setMockExamOption('E'))
      }
    }

    useEffect(()=>{
      if(mockExamOptions.optionA || mockExamOptions.optionB || mockExamOptions.optionC || mockExamOptions.optionD){
        setIsNext(true)
      }else{
        setIsNext(false)
      }
    },[mockExamOptions])

  return (
    <div className='examBody'>
      <div className="examBody-mobile">
      <button onClick={()=>dispatch(setLeavingNow())}>x</button>
        <h5>Jamb Mock Exam</h5>
        <article>
        <aside>
        <meter min={0} max={100} value={examMeter}></meter>
        <p>{examMeter}%</p>
        </aside>
        <section><LuClock2 fontSize={30}/>{examTimerMins}:{examTimerSecs}</section>
        </article>
      </div>
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
              <input type="radio" checked={mockExamOptions.optionA} onChange={()=>dispatch(setMockExamOption({option:'A',answer:'A'}))}/>
            </nav>
            <nav>
              <h4>B.</h4>
              <p>{currentQuestion?.options[1]}</p>
              <input type="radio" checked={mockExamOptions.optionB} onChange={()=>dispatch(setMockExamOption({option:'B',answer:'B'}))}/>
            </nav>
            <nav>
              <h4>C.</h4>
              <p>{currentQuestion?.options[2]} </p>
              <input type="radio" checked={mockExamOptions.optionC} onChange={()=>dispatch(setMockExamOption({option:'C',answer:'C'}))}/>
            </nav>
            <nav>
              <h4>D.</h4>
              <p>{currentQuestion?.options[3]}</p>
              <input type="radio" checked={mockExamOptions.optionD} onChange={()=>dispatch(setMockExamOption({option:'D',answer:'D'}))}/>
            </nav>
          </main>
        </div>
        <div className="examBody-secondLayerButton">
          <button style={{display:parseInt(subjectId) === 1 ? 'none' : 'flex'}} onClick={()=>previousExam()}>
            <article><FaArrowLeftLong /></article>
            <h2>Previous</h2>
          </button>
          <button style={{display:mockExamQuestions.length === parseInt(subjectId) ? 'none' : 'flex'}} onClick={()=>nextExam()}>
          <h2>{isNext? 'Next' : 'Skip'}</h2>
          <article><FaArrowRightLong /></article>
          </button>
          <button style={{display:mockExamQuestions.length === parseInt(subjectId) ? 'flex' : 'none',background:'#804BF2',color:'white',borderColor:'#804BF2'}} onClick={()=>dispatch(setFinishedExam())}>
          <h2>Finish</h2>
          </button>
        </div>
      </div>
    </div>
  )
}

export default TheExam
