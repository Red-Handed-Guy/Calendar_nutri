import { dateInterface } from '../../types'

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
    console.log('неверное количество дней в массиве (не делится на 7)')
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

export function findLastDay(y: number, m: number) {
  const newMonth = m + 1
  return new Date(y, newMonth, 0).getDate()
}

export function range(date: dateInterface) {
  if (date.month === null) {
    return
  }
  const daysInMonth = findLastDay(date.year, date.month)

  const firstMonthDay = new Date(date.year, date.month, 1).getDay()

  const lastMonthDay = new Date(date.year, date.month, daysInMonth).getDay()

  const emptyDaysBefore = emptyDays({ day: firstMonthDay, isBefore: true })
  const emptyDaysAfter = emptyDays({ day: lastMonthDay, isBefore: false })
  const monthDaysArr = monthDays(daysInMonth)

  return cuttingIntoWeeks([
    ...emptyDaysBefore,
    ...monthDaysArr,
    ...emptyDaysAfter,
  ])
}
