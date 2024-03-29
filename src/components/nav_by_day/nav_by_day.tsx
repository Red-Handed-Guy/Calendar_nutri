import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import NavButton from '../nav_button/nav_button'
import CalendarSvg from '../../icons/calendar_icon.svg'
import styles from './nav_by_day.module.scss'
import { MonthsEnumGenitiveEnum } from '../../types'
import { FC, useEffect, useState } from 'react'
import { setNextDay, setPreviousDay } from '../../redux/slices/date_slice'
import { setMonth } from '../../redux/slices/active_month_slice'

interface NavByDayInterface {
  setIsPopupOpened: React.Dispatch<React.SetStateAction<boolean>>
}

const NavByDay: FC<NavByDayInterface> = ({ setIsPopupOpened }) => {
  const date = useAppSelector(state => state.dateSlice)
  const dispatch = useAppDispatch()
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false)

  useEffect(() => {
    if (
      date.activeDate.day === date.todayDate.day &&
      date.activeDate.month === date.todayDate.month &&
      date.activeDate.year === date.todayDate.year
    ) {
      setIsButtonDisabled(true)
    } else {
      setIsButtonDisabled(false)
    }
  }, [
    date.activeDate.day,
    date.activeDate.month,
    date.activeDate.year,
    date.todayDate.day,
    date.todayDate.month,
    date.todayDate.year,
  ])

  const handleOpenPopup = () => {
    setIsPopupOpened(true)
    dispatch(
      setMonth({
        date: { month: date.activeDate.month, year: date.activeDate.year },
      }),
    )
  }

  const handlePreviousDay = () => {
    dispatch(setPreviousDay())
  }

  const handleNextDay = () => {
    dispatch(setNextDay())
  }

  return (
    <div className={styles.nav_buttons_wrapper}>
      <NavButton onClick={handlePreviousDay} isArrowLeft={true} />
      <button onClick={handleOpenPopup} className={styles.date_button}>
        <CalendarSvg className={styles.date_svg} />
        <p
          className={styles.date_text}
        >{`${date.activeDate.day} ${MonthsEnumGenitiveEnum[date.activeDate.month]}`}</p>
      </button>
      <NavButton onClick={handleNextDay} disabled={isButtonDisabled} />
    </div>
  )
}

export default NavByDay
