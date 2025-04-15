import { useSelector } from 'react-redux'
import LeavingNow from './LeavingNow'
import TheExam from './TheExam'

const ExamBody = () => {
  const leavingNow = useSelector((state)=>state.leavingNow)
  console.log(leavingNow)
  return (
    <>
      {
        leavingNow ? <LeavingNow/> : <TheExam/>

        
      }
    </>
  )
}

export default ExamBody
