import React from 'react'
import '../../styles/dashboardCss/profile.css'
import { TbEdit } from 'react-icons/tb'
import { LuUserRound } from 'react-icons/lu'

const Profile = () => {
  return (
    <div className='profile'>
      <div className="profile-firstLayer">
        <h3>Profile Setting</h3>
        <nav><TbEdit fontSize={25}/>Edit</nav>
      </div>
      <div className="profile-secondLayer">
      <LuUserRound fontSize={50} />
        <nav>+</nav>
      </div>
      <div className="profile-thirdLayer">
        <main>
          <label>Full Name</label>
          <input disabled={true} type="text" placeholder='Enter Fullname'/>
        </main>
        <main>
          <label>Email</label>
          <input disabled={true} type="email" placeholder='Enter Email'/>
        </main>
        <main>
          <label>Old Password</label>
          <input disabled={true} type="text" placeholder='123*******'/>
        </main>
        <main>
          <label>New Password</label>
          <input disabled={true} type="text" placeholder='abc******'/>
        </main>
        <main>
          <label>Confirm Password</label>
          <input disabled={true} type="text" placeholder='abc******'/>
        </main>
        <button>Update Password</button>
      </div>
    </div>
  )
}

export default Profile
