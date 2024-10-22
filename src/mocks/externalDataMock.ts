export const EXTERNAL_DATA_MOCK = [
  {
    id: 1,
    name: 'Природные',
    isLast: false,
    type: 'external',
    children: [
      {
        id: 2,
        name: 'Экология',
        isLast: false,
        type: 'external',
        children: [
          {
            id: 3,
            name: 'Загрязнение воды',
            isLast: true,
            type: 'external',
          },
          {
            id: 27,
            name: 'Назад',
            type: 'external',
            isLast: false
          }
        ]
      },
      {
        id: 4,
        name: 'Погода',
        isLast: false,
        type: 'external',
        children: [
          {
            id: 5,
            name: 'Температура воздуха',
            type: 'external',
            isLast: true
          },
          {
            id: 6,
            name: 'Влажность воздуха',
            type: 'external',
            isLast: true
          },
          {
            id: 28,
            name: 'Назад',
            type: 'external',
            isLast: false,
          }
        ]
      },
      {
        id: 26,
        name: 'Назад',
        type: 'external',
        isLast: false,
      }
    ]
  },
  {
    id: 7,
    name: 'Социальные',
    type: 'external',
    isLast: false,
    children: [
      {
        id: 8,
        name: 'Миграция',
        type: 'external',
        isLast: false,
        children: [
          {
            id: 9,
            name: 'Внутренняя миграция',
            type: 'external',
            isLast: true
          },
          {
            id: 10,
            name: 'Внешняя миграция',
            type: 'external',
            isLast: true
          },
          {
            id: 30,
            name: 'Назад',
            type: 'external',
            isLast: false,
          }
        ]
      },
      {
        id: 9,
        name: 'Сводки данных',
        type: 'external',
        isLast: false,
        children: [
          {
            id: 11,
            name: 'Уровень преступности',
            type: 'external',
            isLast: true
          },
          {
            id: 12,
            name: 'Частота пожаров',
            type: 'external',
            isLast: true
          },
          {
            id: 31,
            name: 'Назад',
            type: 'external',
            isLast: false,
          }
        ]
      },
      {
        id: 29,
        name: 'Назад',
        type: 'external',
        isLast: false,
      }
    ]
  },
  {
    id: 13,
    name: 'Экономические',
    type: 'external',
    isLast: false,
    children: [
      {
        id: 14,
        name: 'Государственные',
        type: 'external',
        isLast: false,
        children: [
          {
            id: 16,
            name: 'Инфляция',
            type: 'external',
            isLast: true
          },
          {
            id: 17,
            name: 'Ключевая ставка',
            type: 'external',
            isLast: true
          },
          {
            id: 34,
            name: 'Назад',
            type: 'external',
            isLast: false,
          }
        ]
      },
      {
        id: 15,
        name: 'Сельское хозяйство',
        type: 'external',
        isLast: false,
        children: [
          {
            id: 18,
            name: 'Сбор урожая',
            type: 'external',
            isLast: true
          },
          {
            id: 19,
            name: 'Закупки из заграницы',
            type: 'external',
            isLast: true
          },
          {
            id: 33,
            name: 'Назад',
            type: 'external',
            isLast: false,
          }
        ]
      },
      {
        id: 32,
        name: 'Назад',
        type: 'external',
        isLast: false,
      }
    ]
  },
  {
    id: 20,
    name: 'Духовные',
    type: 'external',
    isLast: false,
    children: [
      {
        id: 21,
        name: 'Религия',
        type: 'external',
        isLast: false,
        children: [
          {
            id: 22,
            name: 'Религиозные праздники',
            type: 'external',
            isLast: true
          },
          {
            id: 23,
            name: 'Пост',
            type: 'external',
            isLast: true
          },
          {
            id: 37,
            name: 'Назад',
            type: 'external',
            isLast: false,
          }
        ]
      },
      {
        id: 24,
        name: 'Этнография',
        type: 'external',
        isLast: false,
        children: [
          {
            id: 24,
            name: 'Этнос',
            type: 'external',
            isLast: true
          },
          {
            id: 25,
            name: 'Национальность',
            type: 'external',
            isLast: true
          },
          {
            id: 36,
            name: 'Назад',
            type: 'external',
            isLast: false,
          }
        ]
      },
      {
        id: 35,
        name: 'Назад',
        type: 'external',
        isLast: false,
      }
    ]
  }
]