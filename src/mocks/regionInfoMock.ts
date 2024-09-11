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