import { FC } from 'react'
import Day from '../day/day'
import { useAppSelector } from '../../../redux/hooks'
import { concatDate } from '../../../utils/consts'

interface WeekInterface {
  weekArr: number[]
}

const Week: FC<WeekInterface> = ({ weekArr }) => {
  const activeMonthDate = useAppSelector(
    state => state.activeMonthsEnumlice.date,
  )
  return (
    <tr>
      {weekArr.map((day, i) =>
        day !== 0 ? (
          <Day
            day={day}
            key={
              concatDate({
                month: activeMonthDate.month,
                year: activeMonthDate.year,
                day: day,
              }) + i
            }
            index={i}
          />
        ) : (
          <td
            key={
              concatDate({
                month: activeMonthDate.month,
                year: activeMonthDate.year,
                day: day,
              }) + i
            }
          ></td>
        ),
      )}
    </tr>
  )
}

export default Week
