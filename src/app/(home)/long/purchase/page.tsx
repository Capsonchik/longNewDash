'use client'

import styles from './styles.module.scss'
import {MapBig} from "@/components/mapBig/MapBig";
import {MAP_REGIONS} from "@/mocks/regionInfoMock";
import {SelectPicker} from "rsuite";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentPeriod, selectCurrentRegion} from "@/store/store.selectors";
import {PERIOD} from "@/mocks/periodMock";
import {RangePickers} from "@/components/rangePickers/RangePickers";
import {AppDispatch} from "@/store/store";
import {setCurrentPeriod} from "@/store/store.slice";

export default function Page() {
  const region = useSelector(selectCurrentRegion)
  const currentPeriod = useSelector(selectCurrentPeriod)

  const dispatch = useDispatch<AppDispatch>();

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
        <SelectPicker
          defaultValue={'Год'}
          data={periodData}
          placeholder={'Период...'}
          onChange={(value) => dispatch(setCurrentPeriod(value))}
        />
      </div>
      <div className={styles.slider}>
        <RangePickers periodType={currentPeriod}/>
      </div>
      <MapBig currentValue={currentRegion}/>
    </div>
  )
}