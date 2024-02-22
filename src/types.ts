export enum MonthsEnum {
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

export enum MonthsEnumGenitiveEnum {
  ['Января'],
  ['Февраля'],
  ['Марта'],
  ['Апреля'],
  ['Мая'],
  ['Июня'],
  ['Июля'],
  ['Августа'],
  ['Сентября'],
  ['Октября'],
  ['Ноября'],
  ['Декабря'],
}

export type ChoiceType = 'gray' | 'yellow' | 'green'

export interface DateInterface {
  day?: number | null
  year: number | null
  month: number | null
  daysInMonth?: number | null
}

export interface ChoiceItemInterface {
  choice: ChoiceType
  date: number
}
