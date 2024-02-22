## Description of the task

Необходимо реализовать страницу web-приложения.
Функционал следующий:
1. вверху страницы находится поле с датой. При открытии страницы там отображается сегодняшняя дата, при нажатии на стрелки слева или справа дата меняется на предыдущий или следующий день соответственно. Если дата сегодняшняя, то стрелка справа неактивна, чтобы избежать перемещения в будущее;
2. ниже даты находится поле с данными за выбранный день. В тестовом задании сам текст в этом поле не имеет значения, важен цвет. При открытии конкретного дня в первый раз отображаются все три надписи как на макете, но пользователь должен будет выбрать одну из них и, с этого момента, в этом дне отображается только выбранная пользователем надпись. Кроме того, необходимо реализовать возможность изменить ранее сделанный выбор.
3. при нажатии на дату из первого пункта, открывается всплывающее окно, в котором отображается календарь. При выборе даты в календаре, в поле 1 устанавливается выбранная дата, а текст меняется на тот, что ранее выбран пользователем или дефолтное значение (все три надписи). Кроме того, во всплывающем календаре каждый день подчеркнут чертой определенного цвета. Этот цвет должен совпадать с выбранным пользователем в этот день или в дефолтном случае быть серым.

Не используйте в своей реализации какие-либо базы данных. Всё, что нужно сохранить, складывайте в json-файлы.

## Result of work

https://red-handed-guy.github.io/Calendar_nutri/

## Installation
Приложение было разработано на версии **Node v20.10.0**, и **npm v10.2.3**

1) Скачать архив с ветки `main`, разархивировать в любую удобную папку

2) Перейти в разархивированную папку в терминале, установить зависимости командой 
```bash
  npm ci
```
3) Собрать билд командой 
```bash
  npm run build
```
4) Запустить билд командой
```bash
  npm run server
```


## Tech Stack

**Client:** 

![Static Badge](https://img.shields.io/badge/React-black?style=for-the-badge&logo=React)
![Static Badge](https://img.shields.io/badge/TypeScript-%232F74C0?style=for-the-badge&logo=TypeScript&logoColor=%23fff)
![Static Badge](https://img.shields.io/badge/Redux%2Ftoolkit-%237248B6?style=for-the-badge&logo=Redux&logoColor=%23fff)
![Static Badge](https://img.shields.io/badge/SCSS-%23C76395?style=for-the-badge&logo=SASS&logoColor=%23fff)
![Static Badge](https://img.shields.io/badge/HTML-gray?style=for-the-badge&logo=HTML5)

**Tools:**

![Static Badge](https://img.shields.io/badge/Git-black?style=for-the-badge&logo=Git&logoColor=%23fff&color=%23E84E31)
![Static Badge](https://img.shields.io/badge/Webpack-%2391CDF1?style=for-the-badge&logo=Webpack&logoColor=%23fff)
![Static Badge](https://img.shields.io/badge/Jest-%23944058?style=for-the-badge&logo=Jest)


## Testing
C помощью библиотеки Jest выполнены unit-тесты основных функций, связанных с получением/высчитыванием дат, месяцев.
