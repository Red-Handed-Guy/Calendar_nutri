import { FC, MouseEventHandler, useEffect, useState } from 'react'
import styles from './active_page_content.module.scss'
import { ChoiceType } from '../../types'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import {
  deleteChoice,
  setNewChoice,
} from '../../redux/slices/saved_choices_slice'
import { concatDate } from '../../utils/consts'

const ActivePageContent: FC = () => {
  const [choice, setChoice] = useState<ChoiceType | 'empty'>('empty')
  const dispatch = useAppDispatch()
  const activeDate = useAppSelector(state => state.dateSlice.activeDate)
  const savedChoices = useAppSelector(
    state => state.savedChoicesSlice.savedChoices,
  )

  useEffect(() => {
    const foundDate = savedChoices.filter(
      item =>
        item.date ===
        concatDate({
          month: activeDate.month,
          year: activeDate.year,
          day: activeDate.day,
        }),
    )
    if (foundDate.length > 0) {
      foundDate.forEach(item => {
        setChoice(item.choice)
      })
    } else {
      setChoice('empty')
    }
  }, [activeDate.day, activeDate.month, activeDate.year, savedChoices])

  const makeChoice: MouseEventHandler<HTMLButtonElement> = e => {
    if (choice !== 'empty') {
      return
    }
    const name = e.currentTarget.name as ChoiceType
    const thisActiveDay = concatDate({
      month: activeDate.month,
      year: activeDate.year,
      day: activeDate.day,
    })

    dispatch(setNewChoice({ choice: { choice: name, date: thisActiveDay } }))
    setChoice(name)
  }

  const clearChoice = () => {
    const thisActiveDay = concatDate({
      month: activeDate.month,
      year: activeDate.year,
      day: activeDate.day,
    })
    dispatch(
      deleteChoice({
        date: thisActiveDay,
      }),
    )
    setChoice('empty')
  }

  return (
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
            onClick={clearChoice}
            className={`${styles.content_button_reset}`}
          >
            hello world?
          </button>
        )}
      </div>
    </div>
  )
}

export default ActivePageContent
