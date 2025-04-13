import React from 'react'
import '../../styles/dashboardCss/examBody.css'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import { LuClock2 } from 'react-icons/lu'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { cancelExam, setMockExamOption } from '../../global/slice'

const ExamBody = () => {
  const {mockExamQuestions, mockExamOptions} = useSelector((state)=>state)
  const dispatch = useDispatch()
  const nav = useNavigate()
  const {subject, subjectId} = useParams()
  console.log(mockExamQuestions)
  const currentQuestion = mockExamQuestions?.find((item,index)=>index === parseInt(subjectId) -1)
  console.log(subject,typeof parseInt(subjectId),currentQuestion)
  return (
    <div className='examBody'>
      <div className="examBody-firstLayer">
        <h3>Jamb Mock Exam</h3>
        <aside>
        <meter min={0} max={100} value={20}></meter>
        <p>20%</p>
        </aside>
        <section><LuClock2 fontSize={30}/>9:59</section>
        <button onClick={()=>{nav('/dashboard/mock-exam'),dispatch(cancelExam())}}>x</button>
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
          <button style={{display:parseInt(subjectId) === 1 ? 'none' : 'flex'}} onClick={()=>nav(`/${subject}/${parseInt(subjectId) - 1}`)}>
            <article><FaArrowLeftLong /></article>
            <h2>Previous</h2>
          </button>
          <button onClick={()=>{nav(`/${subject}/${parseInt(subjectId) + 1}`),dispatch(setMockExamOption('E'))}}>
          <h2>Next</h2>
          <article><FaArrowRightLong /></article>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ExamBody
