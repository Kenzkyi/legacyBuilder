import React, { useEffect, useState } from 'react'
import '../../styles/dashboardCss/profile.css'
import { TbEdit } from 'react-icons/tb'
import { LuUserRound } from 'react-icons/lu'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import axios from 'axios'
import { setUser } from '../../global/slice'

const Profile = () => {
  const user = useSelector((state)=>state.user)
  const [notEditing,setNotEditing] = useState(true)
  const [notPassword, setNotPassword] = useState(true)
  const [fullName,setFullname] = useState(user?.fullName)
  const [image,setImage] = useState('')
  const [imageUrl,setImageUrl] = useState(user?.image?.imageUrl)
  const dispatch = useDispatch()
  const [edittedPassword, setEdittedPassword] = useState({
    currentPassword:'',
    newPassword:'',
    confirmPassword:''
  })
  const [loading, setLoading] = useState(false)

  const onchangeFile = (e)=>{
    const file = e.target.files[0]
    if (file.type.startsWith('image')) {
      const url = URL.createObjectURL(file)
      setImage(file)
      setImageUrl(url)
    } else {
      toast.error('File type not supported')

    }
  }
  
 const changeFullname = async (fullName) => {
  const id = toast.loading('Updating')
  try {
    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}api/v1/studentUpdate/${user?._id}`,{fullName})
    console.log(res)
    toast.dismiss(id)
    setTimeout(() => {
      toast.success(res?.data?.message)
      dispatch(setUser(res?.data?.data))
      setNotEditing(true)
    }, 500);
  } catch (error) {
    toast.dismiss(id)
    setNotEditing(true)
    toast.error(error?.response?.data?.message)
    console.log(error)
  }
 }
  
  const setProfilePic = async()=>{
    const formDatas = new FormData()
    formDatas.append('image',image)
    try {
      const res = await axios.post(`${import.meta.env.VITE_BASE_URL}api/v1/upload-profileImage/${user?._id}`,formDatas,{
        headers: {
          "Content-Type": 'multipart/form-data',
        }
      })
      if(res?.status === 200){
        toast.success('Upload Successfully')
        dispatch(setUser(res?.data?.data))
      }
      console.log(res)
    } catch (error) {
      toast.error(error?.response?.data?.message)
      console.log(error)
    }

  }

  useEffect(()=>{
    if (image.type) {
      setProfilePic()
    }
  },[image])

  const changePassword = async()=>{
    setLoading(true)
    const id = toast.loading('Please wait ...')
    try {
      const res = await axios.post(`${import.meta.env.VITE_BASE_URL}api/v1/change/password/student/${user?._id}`,edittedPassword)
      setLoading(false)
      toast.dismiss(id)
      setTimeout(() => {
        toast.success(res?.data?.message)
        setEdittedPassword({
          currentPassword:'',
          newPassword:'',
          confirmPassword:''
        })
        setNotPassword(true)
      }, 500);
      
    } catch (error) {
      setLoading(false)
      toast.dismiss(id)
      setTimeout(() => {
        toast.error(error?.response?.data?.message)
      }, 500);
      setEdittedPassword({
        currentPassword:'',
        newPassword:'',
        confirmPassword:''
      })
      setNotPassword(true)
    }
  }

  return (
    <div className='profile'>
      <div className="profile-firstLayer">
        <h3>Profile Setting</h3>
        <>
          {
            notEditing ? <nav  onClick={()=>setNotEditing(false)}><TbEdit fontSize={25}/>Edit</nav> : <nav style={{fontSize:18}} onClick={()=>changeFullname(fullName)}>Update</nav>
          }
        </>
      </div>
      <div className="profile-secondLayer">
      {
        imageUrl ? <img src={imageUrl} alt="" /> : <LuUserRound fontSize={50} />
      }
      
        <label htmlFor='la'> + </label>
        <input type="file" id="la" hidden onChange={(e)=>onchangeFile(e)}/>
      </div>
      <div className="profile-thirdLayer">
        <main>
          <label>Full Name</label>
          <input disabled={notEditing} type="text" placeholder='Enter Fullname' value={fullName} onChange={(e)=>setFullname(e.target.value)} style={{cursor:notEditing?'not-allowed':'pointer'}}/>
        </main>
        <main>
          <label>Email</label>
          <input disabled={true} type="email" placeholder='Enter Email' value={user?.email} style={{cursor:'not-allowed'}}/>
        </main>
        <main>
          <label>Old Password</label>
          <input disabled={notPassword} value={edittedPassword.currentPassword} onChange={(e)=>setEdittedPassword({...edittedPassword,currentPassword:e.target.value})} type="text" placeholder='123*******' style={{cursor:notPassword?'not-allowed':'pointer'}}/>
        </main>
        <main>
          <label>New Password</label>
          <input disabled={notPassword} value={edittedPassword.newPassword} onChange={(e)=>setEdittedPassword({...edittedPassword,newPassword:e.target.value})} type="text" placeholder='abc******' style={{cursor:notPassword?'not-allowed':'pointer'}}/>
        </main>
        <main>
          <label>Confirm Password</label>
          <input disabled={notPassword} value={edittedPassword.confirmPassword} onChange={(e)=>setEdittedPassword({...edittedPassword,confirmPassword:e.target.value})} type="text" placeholder='abc******' style={{cursor:notPassword?'not-allowed':'pointer'}}/>
        </main>
        <>
        {
          notPassword ? <button onClick={()=>setNotPassword(false)}>Change Password</button> : <button style={{backgroundColor:loading?'#804BF2CC' : '#804BF2',cursor:loading?'not-allowed':'pointer'}} disabled={loading} onClick={changePassword}>Update Password</button>
        }
        </>
      </div>
    </div>
  )
}

export default Profile
