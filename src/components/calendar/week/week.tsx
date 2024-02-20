import { FC } from 'react'
import Day from '../day/day'

interface WeekInterface {
  weekArr: number[]
}

const Week: FC<WeekInterface> = ({  weekArr}) => {
  return (
    <tr>
      {weekArr.map((day, i) => (
        <Day day={day} key={day + i + ''} />
      ))}
    </tr>
  )
}

export default Week
