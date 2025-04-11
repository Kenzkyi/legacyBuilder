import React from 'react'
import '../../styles/dashboardCss/overview.css'
import image1 from '../../assets/public/home-firstlayer.png'
import { FaBook } from 'react-icons/fa6'
import { PiExamFill } from 'react-icons/pi'
import image2 from '../../assets/public/1st rating (1).svg'

const Overview = () => {
  return (
    <div className='overview'>
      <div className="overview-firstLayer">
        <div className="overview-firstLayerLeft">
          <div className="overview-firstLayerLeftUP">
            <main>
              <nav>
                <h5><span style={{color:'#F2AE30'}}>Hello,</span> user</h5>
                <p>Welcome to Legacy Builder — your ultimate companion for JAMB success. Let’s help you score 300+ and unlock your dream university!</p>
              </nav>
              <article></article>
              <section></section>
            </main>
            <img src={image1} alt="" />
          </div>
          <div className="overview-firstLayerLeftDown">
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
          </div>
        </div>
        <div className="overview-firstLayerRight">
          <h5>My Performance Level</h5>
          <main>
            <div><FaBook color='#804BF2' fontSize={35}/></div>
            <nav>
              <h6>4</h6>
              <p>Subject
              Selected</p>
            </nav>
          </main>
          <main style={{backgroundColor:'#F2AE30'}}>
            <div style={{backgroundColor:'black'}}><PiExamFill color='white' fontSize={35}/></div>
            <nav>
              <h6>25</h6>
              <p>Minutes Mock Exam</p>
            </nav>
          </main>
          <main style={{backgroundColor:'#804BF2'}}>
            <div style={{backgroundColor:'white'}}><FaBook color='#F2AE30' fontSize={35}/></div>
            <nav style={{color:'white'}}>
              <h6>2</h6>
              <p>Years Pass Questions</p>
            </nav>
          </main>
        </div>
      </div>
      <h1>My Rating</h1>
      <div className="overview-secondLayer">
        <div className="overview-secondLayerLeft">
          <img src={image2} alt="" />
          <p>60%</p>
        </div>
        <div className="overview-secondLayerRight"></div>
      </div>
    </div>
  )
}

export default Overview
