import { FC, useState } from 'react'
import styles from './active_page.module.scss'
import Calendar from '../calendar/calendar'
import NavByDay from '../nav_by_day/nav_by_day'

import { useAppDispatch } from '../../redux/hooks'

import { resetSelectedDate } from '../../redux/slices/selected_day_slice'
import ActivePageContent from '../active_page_content/active_page_content'

const ActivePage: FC = () => {
  const [isPopupOpened, setIsPopupOpened] = useState<boolean>(false)
  const dispatch = useAppDispatch()

  const handleClickPopupBackground = () => {
    setIsPopupOpened(false)
    dispatch(resetSelectedDate())
  }

  return (
    <section className={styles.container}>
      <p className={styles.placeholder}>{'<- Placeholder'}</p>
      <NavByDay setIsPopupOpened={setIsPopupOpened} />
      <ActivePageContent />
      {isPopupOpened && (
        <div
          onClick={handleClickPopupBackground}
          className={`${styles.popup} ${isPopupOpened && styles.popup_active}`}
        >
          <Calendar setIsPopupOpened={setIsPopupOpened} />
        </div>
      )}
    </section>
  )
}

export default ActivePage
