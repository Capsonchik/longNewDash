'use client'

import styles from './styles.module.scss'
import {MapBig} from "@/components/mapBig/MapBig";
import {MAP_REGIONS} from "@/mocks/regionInfoMock";
import {SelectPicker} from "rsuite";
import {useState} from "react";

export default function Page() {
  const [currentRegion, setCurrentRegion] = useState<string | null>(null)

  const data = MAP_REGIONS.map(item => ({label: item, value: item}));

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
          data={data}
          placeholder={'Выберите регион...'}
          onChange={(value) => handlePickRegion(value)}
        />
        <SelectPicker data={data} placeholder={'Выберите категорию...'}/>
      </div>
      <MapBig currentValue={currentRegion}/>
    </div>
  )
}