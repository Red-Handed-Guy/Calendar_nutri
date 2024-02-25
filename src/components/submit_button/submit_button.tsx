import { FC } from 'react'
import styles from './submit_button.module.scss'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { setActiveDate } from '../../redux/slices/date_slice'
import { resetSelectedDate } from '../../redux/slices/selected_day_slice'

interface SubmitButtonInterface {
  text: string
  setIsPopupOpened: React.Dispatch<React.SetStateAction<boolean>>
}

const SubmitButton: FC<SubmitButtonInterface> = ({
  text,
  setIsPopupOpened,
}) => {
  const { selectedDate } = useAppSelector(state => state.selectedDateSlice)
  const dispatch = useAppDispatch()

  const handleSubmit = () => {
    dispatch(setActiveDate({ active: selectedDate }))
    dispatch(resetSelectedDate())
    setIsPopupOpened(false)
  }
  const disabled = selectedDate.day === null ? true : false

  return (
    <button
      disabled={disabled}
      className={`${styles.button} ${disabled && styles.button_disabled}`}
      onClick={handleSubmit}
    >
      <p className={styles.button_text}>{text}</p>
    </button>
  )
}

export default SubmitButton
