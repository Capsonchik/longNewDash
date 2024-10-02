'use client'

import styles from './styles.module.scss'
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
import {MapBig} from "@/components/mapBig/MapBig";
import SortUpIcon from '@rsuite/icons/SortUp';
import SortDownIcon from '@rsuite/icons/SortDown';
import {BaseBarChart} from "@/components/charts/BaseBarChart";

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
    <>
      <div className={styles.topContainer}>
        {/*<span className={styles.title}>Объем покупок по регионам</span>*/}
        <div className={styles.filters}>
          <SelectPicker
            value={region}
            data={data}
            placeholder={'Выберите регион...'}
            onChange={(value) => handlePickRegion(value)}
          />
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
        {/*<MapBig currentValue={region}/>*/}
      </div>
      <div className={styles.middleContainer}>

        <div className={styles.middleContainerLeft}>
          <div className={styles.middleContainerLeftTop}>
            <span className={styles.mainTitle}>Всего продаж</span>
            <span className={styles.mainStat}>196 927 728 472</span>
            <div className={styles.mainStatInfo}>
              <div className={styles.mainStatInfoLeft}>
                <SortUpIcon style={{color: 'green'}}/>
                <span>45 563 957 (0.0231%)</span>
              </div>
              <span className={styles.mainStatInfoRight}>30.09.2024 vs 30.09.2023</span>
            </div>
          </div>
          <div className={styles.average}>
            <div className={styles.averageItem}>
              <span className={styles.title}>Средняя цена за товар</span>
              <span className={styles.averageCost}>140,30 ₽</span>
              <div style={{color: 'green'}} className={styles.averageStat}>
                <SortUpIcon style={{color: 'green'}}/>
                <span>0.8(0.48%)</span>
              </div>
            </div>
            <div className={styles.averageItem}>
              <span className={styles.title}>Средний чек</span>
              <span className={styles.averageCost}>140,30 ₽</span>
              <div style={{color: 'red'}} className={styles.averageStat}>
                <SortDownIcon style={{color: 'red'}}/>
                <span>0.8(0.48%)</span>
              </div>
            </div>
          </div>

          <span className={styles.mainTitle}>Топ категорий по изменению цены</span>

          <div className={styles.categories}>

            <div style={{width: '90%'}} className={styles.categoryItem}>
              <span className={styles.categoryItemDescription}>Крем для лица</span>
              <div className={styles.categoryItemStat}>
                <SortUpIcon style={{color: 'green'}}/>
                <span>40.36%</span>
              </div>
            </div>

            <div style={{width: '80%'}} className={`${styles.categoryItem} ${styles.hidden}`}>
              <span className={styles.categoryItemDescription}>Крем для лица</span>
              <div className={styles.categoryItemStat}>
                <SortUpIcon style={{color: 'green'}}/>
                <span>40.36%</span>
              </div>
            </div>

            <div style={{width: '70%'}} className={styles.categoryItem}>
              <span className={styles.categoryItemDescription}>Крем для лица</span>
              <div className={styles.categoryItemStat}>
                <SortUpIcon style={{color: 'green'}}/>
                <span>40.36%</span>
              </div>
            </div>

            <div style={{width: '60%'}} className={`${styles.categoryItem} ${styles.hidden}`}>
              <span className={styles.categoryItemDescription}>Крем для лица</span>
              <div className={styles.categoryItemStat}>
                <SortUpIcon style={{color: 'green'}}/>
                <span>40.36%</span>
              </div>
            </div>

            <div style={{width: '55%'}} className={styles.categoryItem}>
              <span className={styles.categoryItemDescription}>Крем для лица</span>
              <div className={styles.categoryItemStat}>
                <SortUpIcon style={{color: 'green'}}/>
                <span>40.36%</span>
              </div>
            </div>

          </div>

        </div>

        <div className={styles.middleContainerRight}>
          <MapBig currentValue={region}/>
        </div>

      </div>

      <div className={styles.botContainer}>
        {/*<div className={styles.botItem}>*/}
        {/*  <BaseBarChart/>*/}
        {/*</div>*/}
        <BaseBarChart/>
        {/*<div className={styles.botItem}>*/}
        {/*  <BaseStackHorizontal/>*/}
        {/*</div>*/}
      </div>
    </>
  )
}