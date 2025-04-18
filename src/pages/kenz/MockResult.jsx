import React, { useState } from 'react'
import '../../styles/dashboardCss/mockResult.css'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { cancelExam } from '../../global/slice'
import { useNavigate } from 'react-router-dom'

const MockResult = () => {
  const mockExamQuestions = useSelector((state)=>state.mockExamQuestions)
  const exam = useSelector((state)=>state.exam)
  const [intialCount,setIntialCount] = useState(0)
  const [finalCount,setFinalCount] = useState(5)
  const dispatch = useDispatch()
  const nav = useNavigate()

  const nextSeries = ()=>{
    setIntialCount(intialCount + 5)
    setFinalCount(finalCount + 5)
  }

  const previousSeries = ()=>{
    setIntialCount(intialCount - 5)
    setFinalCount(finalCount - 5)
  }

  const performance = exam.reduce((acc,item,index)=>{
    acc = acc + item.score
    return acc
  },0) 

  const retryExam = ()=>{
    dispatch(cancelExam())
    nav('/dashboard/mock-exam')
  }
  return (
    <div className='mockResult'>
      <h2><span style={{color:'#804bf2'}}>Mock Exam</span> (Jamb CBT Practice)</h2>
      <h2>Questions & Answers </h2>
      <h5>You Scored {performance} out of 100</h5>
      <div className="mockResult-holder">
        {
          mockExamQuestions?.slice(intialCount,finalCount).map((item,index)=>(
            <main key={index}>
            <header>{item?.question}</header> 
            <ul>
                <li>A. {item?.options[0]}</li>
                <li>B. {item?.options[1]}</li>
                <li>C. {item?.options[2]}</li>
                <li>D. {item?.options[3]}</li>
            </ul>
            <>
              {
                item?.answer === exam.slice(intialCount,finalCount)?.[index]?.answer ? <footer>You got the answer</footer> : <footer>The answer is {item?.answer}</footer>
              }
            </>
        </main>
          ))
        }
      </div>
      <div className="mockResult-button">
        <button style={{display:intialCount > 0?'flex' : 'none'}} className='mockResult-more' onClick={()=>previousSeries()}><IoIosArrowBack color='#88DDFF' fontSize={25} /> Previous</button>
        <button className='mockResult-retry' style={{display:intialCount === 0 || finalCount === 50 ? 'flex' : 'none'}} onClick={()=>retryExam()}>Retry Quiz</button>
        <button className='mockResult-more' style={{display:finalCount < 50 ? 'flex' : 'none' }} onClick={()=>nextSeries()}>See More<IoIosArrowForward color='#88DDFF' fontSize={25} /></button>
      </div>
    </div>
  )
}

export default MockResult