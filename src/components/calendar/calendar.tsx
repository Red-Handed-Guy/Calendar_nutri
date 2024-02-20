import { FC } from 'react'
import Week from './week/week'
import styles from './calendar.module.scss'
import { Months } from '../../types'
import NavButton from '../nav_button/nav_button'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import {
  monthDecrement,
  monthIncrement,
} from '../../redux/slices/activeMonthSlice'

const Calendar: FC = () => {
  const activeMonth = useAppSelector(state => state.activeMonthSlice)
  const dispatch = useAppDispatch()

  const handleGetPreviousMonth = () => {
    dispatch(monthDecrement())
  }

  const handleGetNextMonth = () => {
    dispatch(monthIncrement())
  }

  const daysOfTheWeek = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']

  return (
    <>
      <article className={styles.calendar_wrapper}>
        <h2 className={styles.calendar_title}>Календарь</h2>
        <div className={styles.month_buttons_wrapper}>
          <NavButton onClick={handleGetPreviousMonth} isArrowLeft={true} />
          <h3 className={styles.month_title}>
            {Months[activeMonth.date.month]}
          </h3>
          <NavButton onClick={handleGetNextMonth} />
        </div>
        <table className={styles.calendar_body}>
          <thead>
            <tr>
              {daysOfTheWeek.map(weekDay => (
                <th className={styles.week_days} key={weekDay}>
                  {weekDay}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="body">
            {activeMonth.activeMonthArr &&
              activeMonth.activeMonthArr.map((week, i) => (
                <Week key={i} weekArr={week} />
              ))}
          </tbody>
        </table>
      </article>
    </>
  )
}

export default Calendar
