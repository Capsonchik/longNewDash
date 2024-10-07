'use client'

import styles from './styles.module.scss'
import {FirstSunBurst} from "@/components/charts/firstSunBurst";
import {SecondSunBurst} from "@/components/charts/secondSunBurst";
import {Button, Heading, Text} from "rsuite";
import {LONFITUDE_TEXT} from "@/mocks/textMock";
import {MockStackBarChart} from "@/components/charts/mockChart/mockStackBarChart";
import {MapBig} from "@/components/mapBig/MapBig";

export default function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.questions}>
        <div className={styles.suns}>
          <FirstSunBurst/>
          <SecondSunBurst/>
        </div>
        <div className={styles.sunResults}>
          <Text weight={'semibold'} size={'md'}>{LONFITUDE_TEXT}</Text>
          <Text>1 вопрос: <Text weight={'semibold'} size={'md'}>Пол</Text></Text>
          <Text>2 вопрос: <Text weight={'semibold'} size={'md'}>Рост</Text></Text>
          <Button disabled className={styles.btn}>Для просмотра результатов сделайте выбор в кругах</Button>
          {/*<div style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>*/}
          {/*  <MockStackBarChart/>*/}
          {/*</div>*/}
          <div className={styles.mapContainer}>
            <Text>Вывод статистики по регионам</Text>
            <MapBig currentValue={'Красноярская область'}/>
            <Text>Зеленое больше, красное меньше</Text>
          </div>
        </div>
      </div>
      <div className={styles.graph}>
        <Heading level={3}>Статистика</Heading>
        <div>
          <MockStackBarChart/>
        </div>
      </div>
    </div>
  )
}