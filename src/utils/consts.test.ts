import {
  concatDate,
  cuttingIntoWeeks,
  emptyDays,
  findLastDay,
  monthDays,
  range,
} from './consts'

describe('Проверка concatDate', () => {
  test('Корректные значения', () => {
    expect(concatDate({ month: 11, year: 2022, day: 24 })).toBe(20221224)
  })
  test('Месяц больше 11', () => {
    expect(concatDate({ month: 12, year: 2022, day: 24 })).toBeUndefined()
  })
  test('Пограничные значения', () => {
    expect(concatDate({ month: 11, year: 2999, day: 28 })).toBe(29991228)
  })
  test('Неверная дата', () => {
    expect(concatDate({ month: 1, year: 2024, day: 30 })).toBeUndefined()
  })
})

describe('Проверка emptyDays', () => {
  test('Корректные пограничные значения After', () => {
    expect(emptyDays({ day: 6, isBefore: false })).toEqual([0])
  })
  test('Корректные пограничные значения Before', () => {
    expect(emptyDays({ day: 0, isBefore: true })).toEqual([0, 0, 0, 0, 0, 0])
  })
  test('некорректные значения сверху', () => {
    expect(emptyDays({ day: 7, isBefore: true })).toBeUndefined()
  })
  test('некорректные значения снизу', () => {
    expect(emptyDays({ day: -1, isBefore: true })).toBeUndefined()
  })
})

describe('Проверка emptyDays', () => {
  test('Корректные пограничные значения After', () => {
    expect(emptyDays({ day: 6, isBefore: false })).toEqual([0])
  })
  test('Корректные пограничные значения Before', () => {
    expect(emptyDays({ day: 0, isBefore: true })).toEqual([0, 0, 0, 0, 0, 0])
  })
  test('некорректные значения сверху', () => {
    expect(emptyDays({ day: 7, isBefore: true })).toBeUndefined()
  })
  test('некорректные значения снизу', () => {
    expect(emptyDays({ day: -1, isBefore: true })).toBeUndefined()
  })
})

describe('Проверка monthDays', () => {
  test('проверка корректного значения', () => {
    expect(monthDays(6)).toEqual([1, 2, 3, 4, 5, 6])
  })
  test('проверка от 0 и ниже', () => {
    expect(monthDays(0)).toEqual([])
  })
})

describe('Проверка findLastDay', () => {
  test('проверка корректного значения', () => {
    expect(findLastDay(2024, 1)).toBe(29)
  })
  test('проверка неверного значения', () => {
    expect(findLastDay(2024, 12)).toBeUndefined()
  })
})

describe('Проверка cuttingIntoWeeks', () => {
  test('проверка корректного значения', () => {
    expect(
      cuttingIntoWeeks([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
    ).toEqual([
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ])
  })
  test('проверка неверного значения', () => {
    expect(
      cuttingIntoWeeks([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
    ).toBeUndefined()
  })
})

describe('Проверка  range', () => {
  test('проверка корректного значения', () => {
    expect(range({ month: 1, year: 2024 })).toEqual([
      [0, 0, 0, 1, 2, 3, 4],
      [5, 6, 7, 8, 9, 10, 11],
      [12, 13, 14, 15, 16, 17, 18],
      [19, 20, 21, 22, 23, 24, 25],
      [26, 27, 28, 29, 0, 0, 0],
    ])
  })
  test('проверка null', () => {
    expect(range({ month: null, year: null })).toBeUndefined()
  })
})
