import React from 'react'
import '../../styles/dashboardCss/subjectSelected.css'
import image1 from '../../assets/public/home-firstlayer.png'
import { FaBook } from 'react-icons/fa6'
import { useDispatch } from 'react-redux'
import { setIsOverview } from '../../global/slice'


const SubjectSelected = () => {
  const dispatch = useDispatch()
  return (
    <div className='subjectSelected'>
      <div className="subjectSelected-firstLayer">
        <img src={image1} alt="" />
        <div className="subjectSelected-firstLayerHolder">
        <main>
              <nav>
                <h5><span style={{color:'#F2AE30'}}>Hello,</span> user</h5>
                <p>Welcome to Legacy Builder — your ultimate companion for JAMB success. Let’s help you score 300+ and unlock your dream university!</p>
              </nav>
              <article></article>
              <section></section>
            </main>
        </div>
      </div>
         <div className="subjectSelected-secondLayer">
            <h4>Subject Selected</h4>
            <main>
              <nav >
                <aside>
                <section><FaBook fontSize={35}/></section>
                <p>English</p>
                </aside>
              </nav>
              <nav >
                <aside>
                <section><FaBook color='#F2AE30' fontSize={35}/></section>
                <p>Maths</p>
                </aside>
              </nav>
              <nav style={{backgroundColor:'white',cursor:'pointer'}} >
                <aside>
                  <div>+</div>
                <h6>Add Subject</h6>
                </aside>
              </nav>
            </main>
            <article>
            <nav onClick={()=>dispatch(setIsOverview())}>
                <aside>
                <section><FaBook fontSize={35}/></section>
                <p>English</p>
                </aside>
              </nav>
              <nav onClick={()=>dispatch(setIsOverview())}>
                <aside>
                <section><FaBook fontSize={35}/></section>
                <p>English</p>
                </aside>
              </nav>
              <nav onClick={()=>dispatch(setIsOverview())}>
                <aside>
                <section><FaBook fontSize={35}/></section>
                <p>English</p>
                </aside>
              </nav>
              <nav onClick={()=>dispatch(setIsOverview())}>
                <aside>
                <section><FaBook fontSize={35}/></section>
                <p>English</p>
                </aside>
              </nav>
              <nav onClick={()=>dispatch(setIsOverview())}>
                <aside>
                <section><FaBook fontSize={35}/></section>
                <p>English</p>
                </aside>
              </nav>
              <nav onClick={()=>dispatch(setIsOverview())}>
                <aside>
                <section><FaBook fontSize={35}/></section>
                <p>English</p>
                </aside>
              </nav>
              <nav onClick={()=>dispatch(setIsOverview())}>
                <aside>
                <section><FaBook fontSize={35}/></section>
                <p>English</p>
                </aside>
              </nav>
              <nav onClick={()=>dispatch(setIsOverview())}>
                <aside>
                <section><FaBook fontSize={35}/></section>
                <p>English</p>
                </aside>
              </nav>
              <nav onClick={()=>dispatch(setIsOverview())}>
                <aside>
                <section><FaBook fontSize={35}/></section>
                <p>English</p>
                </aside>
              </nav>
            </article>
          </div>
    </div>
  )
}

export default SubjectSelected
