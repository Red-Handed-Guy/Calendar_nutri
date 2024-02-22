import { dateInterface } from '../types'

export function concatDate({ month, year, day }: dateInterface) {
  const stringYear = year + ''
  const stringMonth = `${month}`.length < 2 ? '0' + `${month}` : `${month}`
  const stringDay = `${day}`.length < 2 ? '0' + `${day}` : `${day}`
  return Number(stringYear + stringMonth + stringDay)
}

interface emptyDays {
  day: number
  isBefore: boolean
}

export function emptyDays({ day, isBefore }: emptyDays): number[] {
  if (day < 0 || day > 6) {
    return
  }
  day === 0 ? (day = 7) : day
  let arrZeroDays: number[] = []
  for (let index = 0; isBefore ? index < day - 1 : index < 7 - day; index++) {
    arrZeroDays = [...arrZeroDays, 0]
  }
  return arrZeroDays
}

export function monthDays(days: number): number[] {
  let arrMonthDays: number[] = []
  for (let index = 0; index < days; index++) {
    arrMonthDays = [...arrMonthDays, index + 1]
  }
  return arrMonthDays
}

export function findLastDay(y: number, m: number) {
  if (m > 11 || m < 0 || y > 3000 || y < 1000) {
    return
  }
  const newMonth = m + 1
  return new Date(y, newMonth, 0).getDate()
}

export function cuttingIntoWeeks(month: number[]): number[][] {
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
