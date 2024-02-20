export enum Months {
  ['Январь'],
  ['Февраль'],
  ['Март'],
  ['Апрель'],
  ['Май'],
  ['Июнь'],
  ['Июль'],
  ['Август'],
  ['Сентябрь'],
  ['Октябрь'],
  ['Ноябрь'],
  ['Декабрь'],
}

export interface dateInterface {
  day?: number | null
  year: number | null
  month: number | null
  daysInMonth?: number | null
}
