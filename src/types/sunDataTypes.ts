export type SunDataType = {
  sunData: []
  currentValue: string,
  key: number
  backData: null | string
  scaleType: string
  categoryId: number | null
  firstQuestionData: null
}

export type SunItem = {
  itemStyle: {
    color: string
  }
  name: string
  value: number
  children: SunItem[]
}

export type SunItems = SunItem[]