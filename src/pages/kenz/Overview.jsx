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
        <div className="overview-secondLayerRight">
          <div className="overview-secondLayerRightHolder">
            <ul>
              <h5>Subject</h5>
              <li>English Lang</li>
              <li>Mathematics</li>
              <li>Physics</li>
              <li>Chemistry</li>
            </ul>
            <ul>
              <h5>Performance</h5>
              <li>60%</li>
              <li>70%</li>
              <li>80%</li>
              <li>70%</li>
            </ul>
            <ul>
              <h5>Duration</h5>
              <li>4 Weeks</li>
              <li>3 Weeks</li>
              <li>4 Weeks</li>
              <li>4 Weeks</li>
            </ul>
            <ul>
              <h5>Completed?</h5>
              <li>No</li>
              <li>Yes</li>
              <li>Yes</li>
              <li>No</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="overview-thirdLayer">
        <div className="overview-thirdLayerHolder">
          <h6>How to Improve on your academic performance.</h6>
          <ol>
            <li>Set Clear Goals – Know what grades you’re aiming for and create a plan to reach them.</li>
            <li>Manage Your Time – Use a study schedule to balance school, revision, and rest.</li>
            <li>Stay Consistent – Study regularly, not just before exams.</li>
            <li>Practice with Past Questions – Especially for JAMB, this helps you understand the pattern.</li>
            <li>Take Mock Tests – Simulate real exam conditions to build confidence.</li>
            <li>Ask for Help – Don’t hesitate to ask teachers or peers if you’re stuck.</li>
            <li>Stay Healthy – Eat well, sleep enough, and take short breaks to stay sharp.</li>
            <li>Avoid Distractions – Stay focused during study time—put your phone away if needed.</li>
        </ol>
        </div>
      </div>
    </div>
  )
}

export default Overview
