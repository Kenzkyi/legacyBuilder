import { useSelector } from 'react-redux'
import LeavingNow from './LeavingNow'
import TheExam from './TheExam'
import FinishedExam from '../../components/FinishedExam'

const ExamBody = () => {
  const leavingNow = useSelector((state)=>state.leavingNow)
  const finish = useSelector((state)=>state.FinishedExam)
  return (
    <>
      {
        leavingNow && <LeavingNow/>  
      }

      <TheExam/>

      {
        finish && <FinishedExam/>
      }
    </>
  )
}

export default ExamBody
