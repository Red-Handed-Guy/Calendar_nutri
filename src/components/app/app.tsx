import { FC, useEffect } from 'react'
import { useAppDispatch } from '../../redux/hooks'
import { setActiveDate, setTodayDate } from '../../redux/slices/date_slice'
import { setMonth } from '../../redux/slices/active_month_slice'
import ActivePage from '../active_page/active_page'
import styles from './app.module.scss'
import { setSavedChoices } from '../../redux/slices/saved_choices_slice'

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
          active: today,
        }),
      ),
    )
    dispatch(setMonth({ date: today }))
    const savedChoices = JSON.parse(localStorage.getItem('savedChoices'))
    if (savedChoices === null) {
      localStorage.setItem('savedChoices', JSON.stringify([]))
      return
    }
    dispatch(setSavedChoices({ saved: savedChoices }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main className={styles.main}>
      <ActivePage />
    </main>
  )
}

export default App
