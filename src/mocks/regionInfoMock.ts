export type RegionInfo = {
  name: string;
  param: string;
  paramValue: number;
  paramStatus: 'up' | 'down';
  city: string;
  cityValue: number;
  cityPercentage: number;
  cityStatus: 'up' | 'down';
}

export const RU_TA: RegionInfo = {
  name: 'Республика Татарстан',
  param: 'Питьевая вода',
  paramValue: 14.94,
  paramStatus: 'up',
  city: 'Казань',
  cityValue: 7.81,
  cityPercentage: 15.5,
  cityStatus: 'up',
}

export const RU_LIP: RegionInfo = {
  name: 'Липецкая область',
  param: 'Питьевая вода',
  paramValue: 14.94,
  paramStatus: 'down',
  city: 'Казань',
  cityValue: 7.81,
  cityPercentage: 18.9,
  cityStatus: 'down',
}

export const RU_CU: RegionInfo = {
  name: 'Чувашская республика',
  param: 'Питьевая вода',
  paramValue: 14.94,
  paramStatus: 'up',
  city: 'Казань',
  cityValue: 7.81,
  cityPercentage: 0.4,
  cityStatus: 'up'
}

export const RU_BA: RegionInfo = {
  name: 'Республика Башкартостан',
  param: 'Питьевая вода',
  paramValue: 14.94,
  paramStatus: 'up',
  city: 'Уфа',
  cityValue: 7.81,
  cityPercentage: 8.5,
  cityStatus: 'up',
}

export const RU_SAK: RegionInfo = {
  name: 'Сахалинская область',
  param: 'Питьевая вода',
  paramValue: 14.94,
  paramStatus: 'down',
  city: 'Казань',
  cityValue: 7.81,
  cityPercentage: 7.6,
  cityStatus: 'down',
}

export const SPACE = [
  'Страна',
  'Федеральный округ',
  'Регион',
  'Город',
  // 'Муниципалитет',
  // 'Избирательный участок',
]

export const REGION = [
  "Белгородская область",
  "Брянская область",
  "Владимирская область",
  "Воронежская область",
  "Ивановская область",
  "Калужская область",
  "Костромская область",
  "Курская область",
  "Липецкая область",
  "Московская область",
  "Орловская область",
  "Рязанская область",
  "Смоленская область",
  "Тамбовская область",
  "Тверская область",
  "Тульская область",
  "Ярославская область",
  "Город Москва столица Российской Федерации город федерального значения",
  "Республика Карелия",
  "Республика Коми",
  "Ненецкий автономный округ (Архангельская область)",
  "Архангельская область (кроме Ненецкого автономного округа)",
  "Вологодская область",
  "Калининградская область",
  "Ленинградская область",
  "Мурманская область",
  "Новгородская область",
  "Псковская область",
  "Город Санкт-Петербург город федерального значения",
  "Республика Адыгея (Адыгея)",
  "Республика Калмыкия",
  "Республика Крым",
  "Краснодарский край",
  "Астраханская область",
  "Волгоградская область",
  "Ростовская область",
  "Город федерального значения Севастополь",
  "Республика Дагестан",
  "Республика Ингушетия",
  "Кабардино-Балкарская Республика",
  "Карачаево-Черкесская Республика",
  "Республика Северная Осетия-Алания",
  "Чеченская Республика",
  "Ставропольский край",
  "Республика Башкортостан",
  "Республика Марий Эл",
  "Республика Мордовия",
  "Республика Татарстан (Татарстан)",
  "Удмуртская Республика",
  "Чувашская Республика - Чувашия",
  "Пермский край",
  "Кировская область",
  "Нижегородская область",
  "Оренбургская область",
  "Пензенская область",
  "Самарская область",
  "Саратовская область",
  "Ульяновская область",
  "Курганская область",
  "Свердловская область",
  "Ханты-Мансийский автономный округ - Югра (Тюменская область)",
  "Ямало-Ненецкий автономный округ (Тюменская область)",
  "Тюменская область (кроме Ханты-Мансийского автономного округа-Югры и Ямало-Ненецкого автономного округа)",
  "Челябинская область",
  "Республика Алтай",
  "Республика Тыва",
  "Республика Хакасия",
  "Алтайский край",
  "Красноярский край",
  "Иркутская область",
  "Кемеровская область - Кузбасс",
  "Новосибирская область",
  "Омская область",
  "Томская область",
  "Республика Бурятия",
  "Забайкальский край",
  "Республика Саха (Якутия)",
  "Камчатский край",
  "Приморский край",
  "Хабаровский край",
  "Амурская область",
  "Магаданская область",
  "Сахалинская область",
  "Еврейская автономная область",
  "Чукотский автономный округ"
];

export const COUNTRY = ['Россия']

export const FEDERAL_DISTRICT = [
  "Центральный федеральный округ",
  "Северо-Западный федеральный округ",
  "Южный федеральный округ",
  "Северо-Кавказский федеральный округ",
  "Приволжский федеральный округ",
  "Уральский федеральный округ",
  "Сибирский федеральный округ",
  "Дальневосточный федеральный округ"
];

export const CITIES = [
  "Москва",
  "Санкт-Петербург",
  "Новосибирск",
  "Екатеринбург",
  "Нижний Новгород",
  "Казань",
  "Челябинск",
  "Омск",
  "Самара",
  "Ростов-на-Дону",
  "Уфа",
  "Красноярск",
  "Воронеж",
  "Пермь",
  "Волгоград",
  "Краснодар",
  "Саратов",
  "Тюмень",
  "Тольятти",
  "Ижевск",
  "Барнаул",
  "Ульяновск",
  "Иркутск",
  "Хабаровск",
  "Ярославль",
  "Владивосток",
  "Махачкала",
  "Томск",
  "Оренбург",
  "Кемерово",
  "Новокузнецк",
  "Рязань",
  "Астрахань",
  "Пенза",
  "Липецк",
  "Киров",
  "Чебоксары",
  "Брянск",
  "Тула",
  "Калининград",
  "Курск",
  "Ставрополь",
  "Улан-Удэ",
  "Тверь",
  "Магнитогорск",
  "Иваново",
  "Балашиха",
  "Сочи",
  "Белгород",
  "Владимир",
  "Архангельск",
  "Сургут",
  "Курган",
  "Смоленск",
  "Калуга",
  "Чита",
  "Орёл",
  "Волжский",
  "Череповец",
  "Владикавказ",
  "Мурманск",
  "Тамбов",
  "Петрозаводск",
  "Кострома",
  "Нижний Тагил",
  "Новочеркасск",
  "Великий Новгород",
  "Грозный",
  "Саранск",
  "Якутск",
  "Симферополь",
  "Севастополь",
  "Нальчик",
  "Назрань",
  "Майкоп",
  "Черкесск",
  "Элиста",
  "Абакан",
  "Горно-Алтайск",
  "Владикавказ",
  "Майкоп",
  "Назрань",
  "Черкесск",
  "Элиста",
  "Абакан",
  "Горно-Алтайск"
];

export const PERIOD = [
  '1 год',
  '6 месяцев',
  '3 месяца',
  '1 месяц',
  '1 неделя',
]

export const DATE_TO_PICK = [
  '2019',
  '2020',
  '2021',
  '2022',
  '2023',
  '2024'
]