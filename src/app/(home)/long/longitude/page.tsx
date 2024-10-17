'use client'

import styles from './styles.module.scss'
import {FirstSunBurst} from "@/components/charts/firstSunBurst";
import {SecondSunBurst} from "@/components/charts/secondSunBurst";
import {Button, ButtonToolbar, Heading, SelectPicker, Text} from "rsuite";
import {LONFITUDE_TEXT} from "@/mocks/textMock";
import {MockStackBarChart} from "@/components/charts/mockChart/mockStackBarChart";
import {MapBig} from "@/components/mapBig/MapBig";
import {useDispatch, useSelector} from "react-redux";
import {selectResultInput} from "@/store/store.selectors";
import {setResultInput} from "@/store/store.slice";
import {MAP_REGIONS} from "@/mocks/regionInfoMock";
import {MonthPiker} from "@/components/rangePickers/monthPicker/MonthPiker";

export default function Page() {
  const dispatch = useDispatch();

  const resultInput = useSelector(selectResultInput)

  const data = MAP_REGIONS.map(item => ({label: item, value: item}));

  return (
    <div className={styles.container}>
      <div className={styles.questions}>
        <div className={styles.suns}>
          <Heading level={4}>Выберите параметр на лонгитюдных кругах</Heading>
          <FirstSunBurst/>
          <SecondSunBurst/>
        </div>
        <div className={styles.sunResults}>
          <Heading level={4}>Выберите субъект Российской Федерации (не обязательно)</Heading>
          <Text weight={'semibold'} size={'md'}>{LONFITUDE_TEXT}</Text>
          <div className={styles.selectsBlocks}>
            <div className={styles.selectsBlock}>
              <Text weight={'semibold'}>1 параметр:</Text>
              <SelectPicker disabled className={styles.select} data={data} placeholder={'Выберите вариант ответа'}/>
            </div>
            <div className={styles.selectsBlock}>
              <Text weight={'semibold'}>2 параметр:</Text>
              <SelectPicker className={styles.select} data={data} placeholder={'Выберите вариант ответа'}/>
            </div>
            <div className={styles.selectsBlock}>
              <Text weight={'semibold'}>Выбор периода</Text>
              {/*<SelectPicker className={styles.select} data={data}/>*/}
              <div className={styles.select}>
                <MonthPiker/>
              </div>
            </div>
          </div>
          {/*<Text>1 вопрос: <Text weight={'semibold'} size={'md'}>Пол</Text></Text>*/}
          {/*<Text>2 вопрос: <Text weight={'semibold'} size={'md'}>Рост</Text></Text>*/}
          <ButtonToolbar>
            <Button
              className={styles.btn}
              onClick={() => dispatch(setResultInput('map'))}
            >
              Вывод результата на карте
            </Button>
            <Button
              className={styles.btn}
              onClick={() => dispatch(setResultInput('graph'))}
            >
              Вывод результата на графике
            </Button>
          </ButtonToolbar>
          <div className={styles.mapContainer}>
            {resultInput === 'map'
              ? (
                <>
                  <Text>Вывод статистики по регионам</Text>
                  <MapBig currentValue={'Красноярская область'}/>
                  <Text>Зеленое больше, красное меньше</Text>
                </>
              )
              : <MockStackBarChart/>
            }
          </div>
        </div>
      </div>
      {/*<div className={styles.graph}>*/}
      {/*  <Heading level={3}>Статистика</Heading>*/}
      {/*  <div>*/}
      {/*    <MockStackBarChart/>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  )
}