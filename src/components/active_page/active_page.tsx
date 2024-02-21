import { FC, MouseEventHandler, useState } from 'react'
import styles from './active_page.module.scss'
import Calendar from '../calendar/calendar'
import NavByDay from '../nav_by_day/nav_by_day'
import { ChoiceType } from '../../types'

const ActivePage: FC = () => {
  const [isPopupOpened, setIsPopupOpened] = useState<boolean>(false)
  const [choice, setChoice] = useState<ChoiceType | 'empty'>('empty')

  const handleClickPopupBackground = () => {
    setIsPopupOpened(false)
  }

  const makeChoice: MouseEventHandler<HTMLButtonElement> = e => {
    setChoice(e.currentTarget.name as ChoiceType)
  }

  return (
    <section className={styles.container}>
      <p className={styles.placeholder}>{'<- Placeholder'}</p>
      <NavByDay setIsPopupOpened={setIsPopupOpened} />
      <div className={styles.content_wrapper}>
        <div className={styles.content}>
          {(choice === 'empty' || choice === 'green') && (
            <button
              name="green"
              type="button"
              onClick={makeChoice}
              className={`${styles.content_item} ${styles.content_item_green}`}
            >
              hello world
            </button>
          )}
          {(choice === 'empty' || choice === 'yellow') && (
            <button
              name="yellow"
              type="button"
              onClick={makeChoice}
              className={`${styles.content_item} ${styles.content_item_yellow}`}
            >
              hello world
            </button>
          )}
          {(choice === 'empty' || choice === 'gray') && (
            <button
              name="gray"
              type="button"
              onClick={makeChoice}
              className={`${styles.content_item} ${styles.content_item_gray}`}
            >
              hello world
            </button>
          )}
          {choice !== 'empty' && (
            <button
              name="empty"
              type="button"
              onClick={makeChoice}
              className={`${styles.content_button_reset}`}
            >
              hello world?
            </button>
          )}
        </div>
      </div>

      <div
        onClick={handleClickPopupBackground}
        className={`${styles.popup} ${isPopupOpened && styles.popup_active}`}
      >
        <Calendar setIsPopupOpened={setIsPopupOpened} />
      </div>
    </section>
  )
}

export default ActivePage
