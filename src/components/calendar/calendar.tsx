import { FC } from 'react'
import Week from './week/week'
import styles from './calendar.module.scss'
import { MonthsEnum } from '../../types'
import NavButton from '../nav_button/nav_button'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import {
  monthDecrement,
  monthIncrement,
} from '../../redux/slices/active_month_slice'
import SubmitButton from '../submit_button/submit_button'
import { resetSelectedDate, setActiveDate } from '../../redux/slices/date_slice'

interface CalendarInterface {
  setIsPopupOpened: React.Dispatch<React.SetStateAction<boolean>>
}

const Calendar: FC<CalendarInterface> = ({ setIsPopupOpened }) => {
  const activeMonth = useAppSelector(state => state.activeMonthsEnumlice)

  const selectedDate = useAppSelector(state => state.dateSlice.selectedDate)

  const dispatch = useAppDispatch()

  const handleGetPreviousMonth = () => {
    dispatch(monthDecrement())
  }

  const handleGetNextMonth = () => {
    dispatch(monthIncrement())
  }

  const daysOfTheWeek = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']

  const handleCalendarClick: React.MouseEventHandler<HTMLElement> = e => {
    e.stopPropagation()
  }

  const handleSubmit = () => {
    dispatch(setActiveDate({ active: selectedDate }))
    dispatch(resetSelectedDate())
    setIsPopupOpened(false)
  }

  return (
    <>
      <article
        onClick={handleCalendarClick}
        className={styles.calendar_wrapper}
      >
        <h2 className={styles.calendar_title}>Календарь</h2>
        <div className={styles.month_buttons_wrapper}>
          <NavButton onClick={handleGetPreviousMonth} isArrowLeft={true} />
          <h3 className={styles.month_title}>
            {MonthsEnum[activeMonth.date.month]}
          </h3>
          <NavButton onClick={handleGetNextMonth} />
        </div>
        <div className={styles.table_wrapper}>
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
        </div>
        <SubmitButton
          text="Выбрать"
          onClick={handleSubmit}
          disabled={selectedDate.day === null ? true : false}
        />
      </article>
    </>
  )
}

export default Calendar
