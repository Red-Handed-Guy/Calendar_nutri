import { dateInterface } from '../types'

export function concatDate({ month, year, day }: dateInterface) {
  const stringYear = year + ''
  const stringMonth = `${month}`.length < 2 ? '0' + `${month}` : `${month}`
  const stringDay = `${day}`.length < 2 ? '0' + `${day}` : `${day}`
  return Number(stringYear + stringMonth + stringDay)
}
