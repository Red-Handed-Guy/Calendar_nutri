import { FC, useEffect, useState } from 'react'
import styles from './day.module.scss'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { setSelectedDate } from '../../../redux/slices/date_slice'
import { concatDate } from '../../../utils/consts'
import { ChoiceType } from '../../../types'

interface DayInterface {
  day: number
  index: number
}

const Day: FC<DayInterface> = ({ day, index }) => {
  const activeDate = useAppSelector(state => state.dateSlice.activeDate)
  const selectedDate = useAppSelector(state => state.dateSlice.selectedDate)
  const activeMonthDate = useAppSelector(
    state => state.activeMonthsEnumlice.date,
  )
  const todayDate = useAppSelector(state => state.dateSlice.todayDate)

  const savedChoices = useAppSelector(
    state => state.savedChoicesSlice.savedChoices,
  )
  const dispatch = useAppDispatch()
  const [statusColor, setStatusColor] = useState<ChoiceType>('gray')
  const [isFuture, setIsFuture] = useState<boolean>(false)

  useEffect(() => {
    const today = concatDate({
      month: todayDate.month,
      year: todayDate.year,
      day: todayDate.day,
    })
    const thisDay = concatDate({
      month: activeMonthDate.month,
      year: activeMonthDate.year,
      day: day,
    })

    const checkIsFuture = today < thisDay
    setIsFuture(checkIsFuture)
  }, [
    activeMonthDate.month,
    activeMonthDate.year,
    day,
    todayDate.day,
    todayDate.month,
    todayDate.year,
  ])

  useEffect(() => {
    const foundDate = savedChoices.filter(
      item =>
        item.date ===
        concatDate({
          month: activeMonthDate.month,
          year: activeMonthDate.year,
          day: day,
        }),
    )
    if (foundDate.length > 0) {
      foundDate.forEach(item => {
        setStatusColor(item.choice)
      })
    } else {
      setStatusColor('gray')
    }
  }, [activeMonthDate.month, activeMonthDate.year, day, savedChoices])

  const isActive =
    activeDate.day === day &&
    activeDate.month === activeMonthDate.month &&
    activeDate.year === activeMonthDate.year

  const isToday =
    todayDate.day === day &&
    todayDate.month === activeMonthDate.month &&
    todayDate.year === activeMonthDate.year

  const isSelected =
    selectedDate.day === day &&
    selectedDate.month === activeMonthDate.month &&
    selectedDate.year === activeMonthDate.year

  const handleClick = () => {
    dispatch(
      setSelectedDate({
        selected: {
          month: activeMonthDate.month,
          year: activeMonthDate.year,
          day: day,
        },
      }),
    )
  }
  return (
    <td
      className={`${styles.table_data} ${isToday && styles.table_data_today} ${isActive && styles.table_data_active} ${isSelected && styles.table_data_selected}`}
    >
      <button
        onClick={handleClick}
        disabled={isFuture}
        className={`${styles.table_button} ${(index === 5 || index === 6) && styles.table_button_red} ${isFuture && styles.table_button_disabled}`}
      >
        <p
          className={`${styles.table_button_text} ${!isFuture && styles[`table_button_text_${statusColor}`]}`}
        >
          {day}
        </p>
      </button>
    </td>
  )
}

export default Day
