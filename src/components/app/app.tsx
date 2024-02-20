import { FC, useEffect } from 'react'
import Calendar from '../calendar/calendar'
import { useAppDispatch } from '../../redux/hooks'
import { setActiveDate, setTodayDate } from '../../redux/slices/dateSlice'
import { setMonth } from '../../redux/slices/activeMonthSlice'

const App: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const date = new Date()
    const today = {
      day: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
    }
    dispatch(
      setTodayDate({
        today: today,
      }),
      dispatch(
        setActiveDate({
          today: today,
        }),
      ),
    )
    dispatch(setMonth({ date: today }))
  }, [])

  return (
    <div>
      <Calendar />
    </div>
  )
}

export default App
