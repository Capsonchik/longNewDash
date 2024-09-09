export type SunDataType = {
  sunData: []
  currentValue: string
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