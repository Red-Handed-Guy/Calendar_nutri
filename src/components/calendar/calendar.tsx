import { FC, useEffect, useState } from 'react'

interface dateNowInterface {
  date: Date | null
  year: number | null
  month: number | null
}

const Calendar = () => {
  const [date, setDate] = useState<dateNowInterface>({
    date: null,
    year: null,
    month: null,
  })
  const [actualMonth, setActualMonth] = useState<number[][]>([])

  interface emptyDays {
    day: number
    isBefore: boolean
  }

  function emptyDays({ day, isBefore }: emptyDays): number[] {
    day === 0 ? (day = 7) : day
    let arrZeroDays: number[] = []
    for (let index = 0; isBefore ? index < day - 1 : index < 7 - day; index++) {
      arrZeroDays = [...arrZeroDays, 0]
    }
    return arrZeroDays
  }

  function monthDays(days: number): number[] {
    let arrMonthDays: number[] = []
    for (let index = 0; index < days; index++) {
      arrMonthDays = [...arrMonthDays, index + 1]
    }
    return arrMonthDays
  }

  function cuttingIntoWeeks(month: number[]): number[][] {
    if (month.length % 7 !== 0) {
      console.log('неверное количество дней в месяце (не делится на 7)')
      return
    }
    const numberOfWeeks = month.length / 7
    let monthByWeeks: number[][] = []
    let monday = 0
    let sunday = 7
    for (let index = 0; index < numberOfWeeks; index++) {
      monthByWeeks = [...monthByWeeks, month.slice(monday, sunday)]
      monday += 7
      sunday += 7
    }
    return monthByWeeks
  }

  function range(date: dateNowInterface) {
    if (!date.date) {
      return
    }
    const numDays = (y: number, m: number) => new Date(y, m, 0).getDate()
    const daysInMonth = numDays(date.year, date.month + 1)
    const firstMonthDay = new Date(date.year, date.month, 1).getDay()
    console.log(firstMonthDay)
    const lastMonthDay = new Date(date.year, date.month, daysInMonth).getDay()
    console.log(firstMonthDay, 'firstMonthDay')
    console.log(lastMonthDay, 'lastMonthDay')
    console.log(daysInMonth)

    const emptyDaysBefore = emptyDays({ day: firstMonthDay, isBefore: true })
    const emptyDaysAfter = emptyDays({ day: lastMonthDay, isBefore: false })
    const monthDaysArr = monthDays(daysInMonth)
    console.log(emptyDaysBefore, 'emptyDaysBefore')
    console.log(emptyDaysAfter, 'emptyDaysAfter')
    console.log(monthDaysArr)
    console.log(
      cuttingIntoWeeks([
        ...emptyDaysBefore,
        ...monthDaysArr,
        ...emptyDaysAfter,
      ]),
    )
    return cuttingIntoWeeks([
      ...emptyDaysBefore,
      ...monthDaysArr,
      ...emptyDaysAfter,
    ])
  }

  useEffect(() => {
    const date = new Date()
    setDate({
      date: date,
      month: date.getMonth(),
      year: date.getFullYear(),
    })
  }, [])

  useEffect(() => {
    setActualMonth(range(date))
  }, [date])

  const handleGetPreviousMonth = () => {
    if (date.month === 0) {
      setDate({ ...date, year: date.year - 1, month: 11 })
      return
    }
    setDate({ ...date, month: date.month - 1 })
  }

  return (
    <article>
      <p>{date.month + 1} месяц</p>
      <p>{date.year} год</p>
      <table>
        <thead>
          <tr>
            <th>пн</th>
            <th>вт</th>
            <th>ср</th>
            <th>чт</th>
            <th>пт</th>
            <th>сб</th>
            <th>вс</th>
          </tr>
        </thead>
        <tbody className="body">
          {actualMonth &&
            actualMonth.map((week, i) => (
              <Week
                key={i}
                month={date.month}
                weekArr={week}
                year={date.year}
              />
            ))}
        </tbody>
      </table>
      <button onClick={handleGetPreviousMonth}>минус месяц</button>
    </article>
  )
}

export default Calendar

interface WeekInterface {
  weekArr: number[]
  month: number
  year: number
}

const Week: FC<WeekInterface> = ({ month, weekArr, year }) => {
  return (
    <tr>
      {weekArr.map((day, i) => (
        <Day day={day} month={month} year={year} key={day + i + ''} />
      ))}
    </tr>
  )
}

interface DayInterface {
  day: number
  month: number
  year: number
}

const Day: FC<DayInterface> = ({ month, day, year }) => {
  return <td>{day}</td>
}
