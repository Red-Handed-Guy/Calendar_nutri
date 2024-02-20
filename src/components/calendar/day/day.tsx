import { FC } from 'react'
import styles from './day.module.scss'

interface DayInterface {
  day: number
}

const Day: FC<DayInterface> = ({ day }) => {
  return (
    <>{day === 0 ? <td></td> : <td className={styles.table_data}>{day}</td>}</>
  )
}

export default Day
