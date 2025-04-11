import React from 'react'
import '../../styles/dashboardCss/mockExam.css'
import { useDispatch, useSelector } from 'react-redux'
import { setMockSubject } from '../../global/slice'

const Mockexam = () => {
    const mySubject = useSelector((state)=>state.mockSubject)
    const dispatch = useDispatch()
    const subjects = ['Accounting','Biology','Chemisty','Commerce','English','Government','Literature','Mathematics','Physics']
  return (
    <div className='mockExam'>
      <h2><span style={{color:'#804BF2'}}>Mock Exam</span> (Jamb CBT Practice)</h2>
      <h2>Select CBT Subject below to begin!</h2>
      <div className="mockExam-holder">
        <>
        {
            subjects.map((item,index)=>(
                <div className="mockExam-holderSubject" key={index}>
            <article onClick={()=>dispatch(setMockSubject(item))}>
            <p>{item}</p>
            <h6>{item === mySubject ? '-' : '+'}</h6>
            </article>
            <section style={{display:item === mySubject? 'flex' : 'none'}}>
                <button>Start Jamb CBT</button>
            </section>
        </div>
            ))
        }
        </>
      </div>
      <h5>The platform is cbt simulation using real jamb past questions.</h5>
    </div>
  )
}

export default Mockexam
