'use client'

import styles from './styles.module.scss'
import {MAP_REGIONS} from "@/mocks/regionInfoMock";
import {Divider, SelectPicker, Text} from "rsuite";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentPeriod, selectCurrentRegion} from "@/store/store.selectors";
import {PERIOD} from "@/mocks/periodMock";
import {AppDispatch} from "@/store/store";
import {setCurrentPeriod, setCurrentRegion} from "@/store/store.slice";
import {CATEGORY} from "@/mocks/categories";
import {MapBig} from "@/components/mapBig/MapBig";
import {setSocDrawerStatus} from "@/store/drawersSlice/drawers.slice";
import {PurasheSmallWidget} from "@/components/widgets/purashe/smallWidget/PurasheSmallWidget";
import {CARD_POSSIBILITIES_MOCK, CARD_RISK_MOCK} from "@/mocks/socCardsMocks";


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
        <Text size={'xl'} className={styles.title} weight={'semibold'}>Объем покупок по регионам</Text>
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
        {/* Временно убрал */}
        {/*<div className={styles.slider}>*/}
        {/*  <RangePickers periodType={currentPeriod}/>*/}
        {/*</div>*/}
      </div>
      <div className={styles.middleContainer}>

        <div className={styles.middleContainerLeft}>
          <div className={styles.middleContainerBlock}>
            <div className={styles.blockTitle}>
              <div className={styles.titleTop}>
                <Text size={'lg'} weight={'semibold'}>Топ риски</Text>
                <Divider vertical/>
                <Text style={{cursor: 'pointer'}} size={'md'} muted onClick={() => dispatch(setSocDrawerStatus(true))}>Посмотреть
                  все риски</Text>
              </div>
              <Text muted size={"sm"}>3 кв. 2024г. к 3кв. 2023г.</Text>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '1rem',
                flexWrap: 'wrap',
                gap: '.5rem'
              }}>
                {CARD_RISK_MOCK.map((card) => <PurasheSmallWidget key={card.id} card={card}/>)}
              </div>
            </div>
          </div>

          <div className={styles.middleContainerBlock}>
            <div className={styles.blockTitle}>
              <div className={styles.titleTop}>
                <Text size={'lg'} weight={'semibold'}>Топ возможности</Text>
                <Divider vertical/>
                <Text style={{cursor: 'pointer'}} size={'md'} muted onClick={() => dispatch(setSocDrawerStatus(true))}>Посмотреть
                  все возможности</Text>
              </div>
              <Text muted size={"sm"}>3 кв. 2024г. к 3кв. 2023г.</Text>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '1rem',
                flexWrap: 'wrap',
                gap: '.5rem'
              }}>
                {CARD_POSSIBILITIES_MOCK.map((card) => <PurasheSmallWidget key={card.id} card={card}/>)}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.middleContainerRight}>
          <div className={styles.middleContainerRightTitle}>
            <Text size={'md'}>Карта регионов России</Text>
            <Divider vertical/>
            <Text size={'lg'} weight={'semibold'}>{region}</Text>
          </div>
          <MapBig currentValue={region}/>
        </div>

      </div>
    </>
  )
}