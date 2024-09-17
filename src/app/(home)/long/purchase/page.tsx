'use client'

import styles from './styles.module.scss'
import {MapBig} from "@/components/mapBig/MapBig";
import {MAP_REGIONS} from "@/mocks/regionInfoMock";
import {RangeSlider, SelectPicker} from "rsuite";
import {useState} from "react";
import {useSelector} from "react-redux";
import {selectCurrentRegion} from "@/store/store.selectors";
import {PERIOD} from "@/mocks/periodMock";

export default function Page() {
  const region = useSelector(selectCurrentRegion)

  const [currentRegion, setCurrentRegion] = useState<string | null>(region)

  const data = MAP_REGIONS.map(item => ({label: item, value: item}));
  const periodData = PERIOD.map(item => ({label: item, value: item}));

  const handlePickRegion = (value: string | null) => {
    if (value) {
      setCurrentRegion(value);
      console.log(value);
    } else setCurrentRegion(null);
  }

  return (
    <div className={styles.container}>
      <span className={styles.title}>Объем покупок по регионам</span>
      <div className={styles.filters}>
        <SelectPicker
          defaultValue={currentRegion}
          data={data}
          placeholder={'Выберите регион...'}
          onChange={(value) => handlePickRegion(value)}
        />
        <SelectPicker data={data} placeholder={'Выберите категорию...'}/>
        <SelectPicker defaultValue={'Год'} data={periodData} placeholder={'Период...'}/>
      </div>
      <div className={styles.slider}>
        <RangeSlider
          renderMark={(mark) => mark}
          graduated
          defaultValue={[2019, 2022]}
          min={2018}
          max={2024}
        />
      </div>
      <MapBig currentValue={currentRegion}/>
    </div>
  )
}