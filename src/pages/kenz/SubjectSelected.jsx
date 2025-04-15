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
                  <nav key={index} style={{background:`RGB(${randomCol()},${randomCol()},${randomCol()})`}}>
                    <aside>
                      <section style={{background:'black'}}><FaBook fontSize={35} color={`RGB(${randomCol()},${randomCol()},${randomCol()})`}/></section>
                      <p>{item}</p>
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
                <nav key={index} onClick={()=>addSubject(item)} style={{background:`RGB(${randomCol()},${randomCol()},${randomCol()})`}}>
                  <aside>
                    <section style={{background:'black'}}><FaBook fontSize={35} color={`RGB(${randomCol()},${randomCol()},${randomCol()})`}/></section>
                    <p>{item}</p>
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
