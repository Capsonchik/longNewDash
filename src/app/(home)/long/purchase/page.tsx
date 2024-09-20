'use client'

import styles from './styles.module.scss'
import {MapBig} from "@/components/mapBig/MapBig";
import {MAP_REGIONS} from "@/mocks/regionInfoMock";
import {SelectPicker} from "rsuite";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentPeriod, selectCurrentRegion} from "@/store/store.selectors";
import {PERIOD} from "@/mocks/periodMock";
import {RangePickers} from "@/components/rangePickers/RangePickers";
import {AppDispatch} from "@/store/store";
import {setCurrentPeriod, setCurrentRegion} from "@/store/store.slice";
import {CATEGORY} from "@/mocks/categories";

export default function Page() {
  const region = useSelector(selectCurrentRegion)
  const currentPeriod = useSelector(selectCurrentPeriod)

  const dispatch = useDispatch<AppDispatch>();

  // const [currentRegion, setCurrentRegion] = useState<string | null>(region)

  const data = MAP_REGIONS.map(item => ({label: item, value: item}));
  const periodData = PERIOD.map(item => ({label: item, value: item}));
  const categoriesData = CATEGORY.map(item => ({label: item, value: item}));

  const handlePickRegion = (value: string | null) => {
    if (value) {
      dispatch(setCurrentRegion(value));
      // setCurrentRegion(value);
    } else dispatch(setCurrentRegion(null));
  }

  const handleChangeRegion = (value: string | null) => {
    if (value) {
      dispatch(setCurrentPeriod(value))
      dispatch(setCurrentRegion(value))
    }
  }

  const renderRegionPicker = () => {
    return (
      <SelectPicker
        // defaultValue={region}
        value={region}
        data={data}
        placeholder={'Выберите регион...'}
        onChange={(value) => handlePickRegion(value)}
      />
    )
  }

  useEffect(() => {
    renderRegionPicker();
    setCurrentRegion(region);
  }, [region]);

  return (
    <div className={styles.container}>
      <span className={styles.title}>Объем покупок по регионам</span>
      <div className={styles.filters}>
        <SelectPicker
          value={region}
          data={data}
          placeholder={'Выберите регион...'}
          onChange={(value) => handlePickRegion(value)}
        />
        {/*{renderRegionPicker()}*/}
        <SelectPicker
          defaultValue={"Кемпинг"}
          data={categoriesData}
          placeholder={'Выберите категорию...'}
        />
        <SelectPicker
          defaultValue={'Год'}
          data={periodData}
          placeholder={'Период...'}
          onChange={handleChangeRegion}
        />
      </div>
      <div className={styles.slider}>
        <RangePickers periodType={currentPeriod}/>
      </div>
      <MapBig currentValue={region}/>
    </div>
  )
}