import React, { useEffect, useState } from 'react'
import '../../styles/dashboardCss/subjectSelected.css'
import image1 from '../../assets/public/home-firstlayer.png'
import { FaArrowLeftLong, FaBook } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux'
import { setIsOverview, setUser } from '../../global/slice'
import axios from 'axios'
import { toast } from 'react-toastify'


const SubjectSelected = () => {
  const dispatch = useDispatch()
  const user = useSelector((state)=>state.user)
  const randomCol = ()=>{
    let randomNum = Math.floor(Math.random() * 255)
    return randomNum
  }
  const allSubjectsData = [
    {
      subject:'Mathematics',
      cardColor:'#804BF266',
      divColor:'#FFFFFF',
      iconColor:'#804BF2',
      textColor:'#1E1E1E'
    },
    {
      subject:'English',
      cardColor:'#1E1E1E',
      divColor:'#804BF2',
      iconColor:'#FFFFFF',
      textColor:'#FFFFFF'
    },
    {
      subject:'Physics',
      cardColor:'#F2AE30',
      divColor:'#FFFFFF',
      iconColor:'#F2AE30',
      textColor:'#1E1E1E'
    },
    {
      subject:'Chemistry',
      cardColor:'#88DDFF',
      divColor:'#1E1E1E',
      iconColor:'#FFFFFF',
      textColor:'#1E1E1E'
    },
    {
      subject:'Biology',
      cardColor:'#F2AE3099',
      divColor:'#1E1E1E',
      iconColor:'#FFFFFF',
      textColor:'#1E1E1E'
    },
    {
      subject:'Literature in English',
      cardColor:'#F2AE30',
      divColor:'#804BF2CC',
      iconColor:'#FFFFFF',
      textColor:'#1E1E1E'
    },
    {
      subject:'Economics',
      cardColor:'#00000040',
      divColor:'#1E1E1E',
      iconColor:'#FFFFFF',
      textColor:'#1E1E1E'
    },
    {
      subject:'Geography',
      cardColor:'#FFFFFF',
      divColor:'#804BF266',
      iconColor:'#1E1E1E',
      textColor:'#1E1E1E'
    },
    {
      subject:'Government',
      cardColor:'#88DDFF',
      divColor:'#FFFFFF',
      iconColor:'#1E1E1E',
      textColor:'#1E1E1E'
    },
    {
      subject:'History',
      cardColor:'#17004D',
      divColor:'#88DDFF',
      iconColor:'#1E1E1E',
      textColor:'#FFFFFF'
    },
  ]
  const subjectArr = ['English','Mathematics','Physics','Chemistry','Biology','Literature in English','Economics','Geography','Government','History']
  const [filteredSubjectArr,setFilteredSubjectArr] = useState(subjectArr)

  const filterArray = ()=>{
    for(let subject of user?.enrolledSubjects){
        setFilteredSubjectArr(filteredSubjectArr.filter((item)=>item !== subject))
    }
  }

  useEffect(()=>{
    filterArray()
  },[user?.enrolledSubjects])

  const addSubject = async(subject)=>{
    const id = toast.loading('Adding Subject ...')
    try {
      const res = await axios.post(`${import.meta.env.VITE_BASE_URL}api/v1/addSubject/${user?._id}`,{subject})
      if(res?.status === 200){
        toast.dismiss(id)
        setTimeout(() => {
          toast.success(res?.data?.message)
          dispatch(setUser(res?.data?.data))
          dispatch(setIsOverview())
        }, 500);
      }
    } catch (error) {
      toast.dismiss(id)
      setTimeout(() => {
        toast.error(error?.response?.data?.message)
      }, 500);
      console.log(error)
    }
  }

  return (
    <div className='subjectSelected'>
      <div className="subjectSelected-firstLayer">
        <aside><FaArrowLeftLong onClick={()=>dispatch(setIsOverview())}/></aside>
        <img src={image1} alt="" />
        <div className="subjectSelected-firstLayerHolder">
        <main>
              <nav>
                <h5><span style={{color:'#F2AE30'}}>Hello,</span> {user?.fullName}</h5>
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
              {
                user?.enrolledSubjects.map((item,index)=>(
                  <nav key={index} style={{background:allSubjectsData.find((items)=>items.subject === item)?.cardColor}}>
                    <aside>
                      <section style={{background:allSubjectsData.find((items)=>items.subject === item)?.divColor}}><FaBook fontSize={35} color={allSubjectsData.find((items)=>items.subject === item)?.iconColor}/></section>
                      <p style={{color:allSubjectsData.find((items)=>items.subject === item)?.textColor}}>{item}</p>
                    </aside>
                  </nav>
                ))
              }
              {/* <nav style={{backgroundColor:'white',cursor:'pointer'}} >
                <aside>
                  <div>+</div>
                <h6>Add Subject</h6>
                </aside>
              </nav> */}
            </main>
            <article>
           {
              filteredSubjectArr.map((item,index)=>(
                <nav key={index} onClick={()=>addSubject(item)} style={{background:allSubjectsData.find((items)=>items.subject === item)?.cardColor}}>
                    <aside>
                      <section style={{background:allSubjectsData.find((items)=>items.subject === item)?.divColor}}><FaBook fontSize={35} color={allSubjectsData.find((items)=>items.subject === item)?.iconColor}/></section>
                      <p style={{color:allSubjectsData.find((items)=>items.subject === item)?.textColor}}>{item}</p>
                    </aside>
                  </nav>
              ))
           }
            </article>
          </div>
    </div>
  )
}

export default SubjectSelected
