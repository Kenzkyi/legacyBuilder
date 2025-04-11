import React, { useState } from 'react'
import { MdDashboard } from 'react-icons/md'
import dashboardIcon from '../../assets/public/legacy_builder_logo.png'
import '../../styles/dashboardCss/dashboard.css'
import { GrStatusGood } from 'react-icons/gr'
import { AiOutlineLogout } from 'react-icons/ai'
import { Outlet, useNavigate } from 'react-router-dom'
import { PiExamFill } from 'react-icons/pi'

const Dashboard = () => {
    const [navState,setNavState] = useState({
        overview:true,
        mockExam:false,
        pastQuestion:false,
        profile:false,
        subscription:false
    })
    const nav = useNavigate()
  return (
    <div className='dashboard'>
      <div className="dashboard-left">
        <div className="dashboard-leftImg">
            <img src={dashboardIcon} alt="" />
        </div>
        <div onClick={()=>{nav('/dashboard/overview'),setNavState({...navState,overview:true,mockExam:false,pastQuestion:false,profile:false,subscription:false})}} className="dashboard-navBar" style={{backgroundColor:navState.overview?'#804BF233':'white'}}><MdDashboard color='#804BF266' fontSize={35}/>Overview</div>
        <div onClick={()=>{nav('/dashboard/mock-exam'),setNavState({...navState,overview:false,mockExam:true,pastQuestion:false,profile:false,subscription:false})}} className="dashboard-navBar" style={{backgroundColor:navState.mockExam?'#804BF233':'white'}}><PiExamFill color='#804BF266' fontSize={35}/>Mock Exam</div>
        <div onClick={()=>{nav('/dashboard/past-questions'),setNavState({...navState,overview:false,mockExam:false,pastQuestion:true,profile:false,subscription:false})}} className="dashboard-navBar" style={{backgroundColor:navState.pastQuestion?'#804BF233':'white'}}> <nav>
            <img src="" alt="" />
            </nav> Past Question</div>
        <div onClick={()=>{nav('/dashboard/profile'),setNavState({...navState,overview:false,mockExam:false,pastQuestion:false,profile:true,subscription:false})}} className="dashboard-navBar" style={{backgroundColor:navState.profile?'#804BF233':'white'}}><nav>
            <img src="" alt="" />
            </nav>Profile</div>
        <>
            {
                navState.subscription?

                 <div onClick={()=>{nav('/dashboard/subscription'),setNavState({...navState,overview:false,mockExam:false,pastQuestion:false,profile:false,subscription:true})}} className="dashboard-navBar" style={{backgroundColor:navState.subscription?'#804BF233':'white'}}><nav>
                 <img src="" alt="" />
                 </nav>Subscription</div>

                : 
                
                <div className="dashboard-subscription">
                <div className="dashboard-markIcon"><GrStatusGood /></div>
                <h5>Unlimited Access</h5>
                <p>Explore more with a 
                lifetime members</p>
                <button onClick={()=>{nav('/dashboard/subscription'),setNavState({...navState,overview:false,mockExam:false,pastQuestion:false,profile:false,subscription:true})}}>Subscribe Now</button>
            </div>
            }
        </>
        <div  className="dashboard-navBar" style={{backgroundColor:'white'}}><AiOutlineLogout fontSize={35} color='red'/>Logout</div>
      </div>
      <div className="dashboard-right">
        <div className="dashboard-header">
            <h3>Welcome, user</h3>
            <nav>
                <p>H1</p>
            </nav>
        </div>
        <div className="dashboard-rightHolder">
            <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
