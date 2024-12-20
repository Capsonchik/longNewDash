import styles from './styles.module.scss';
import {MapWhite} from "@/components/mapWhite/MapWhite";
import {CheckTreePicker, Panel, SelectPicker, Text} from "rsuite";
import {MAP_REGIONS} from "@/mocks/regionInfoMock";
import {MockScatter} from "@/components/charts/mockChart/mockScatter";
import {MonthPiker} from "@/components/rangePickers/monthPicker/MonthPiker";
import {CHECK_TREE_MOCK_2} from "@/mocks/checkTreeMock";

export default function Page() {
  const data = MAP_REGIONS.map(item => ({label: item, value: item}));

  return (
    <div style={{display: "flex", justifyContent: "space-between", height: "100%"}}>
      <Panel bordered style={{width: '49%'}}>
        <div style={{display: "flex", flexDirection: "column", rowGap: '1rem'}}>
          <div style={{display: "flex", columnGap: '1rem'}}>
            <CheckTreePicker data={CHECK_TREE_MOCK_2} placeholder={'Выберите параметр'}/>
            <MonthPiker/>
          </div>
          <MapWhite currentValue={''}/>
          <div className={styles.legendBlock}>
            <div className={styles.legendItem}>
              <div style={{backgroundColor: '#42ab49'}} className={styles.legendItemColor}></div>
              <Text>высокий, богатое общество</Text>
            </div>

            <div className={styles.legendItem}>
              <div style={{backgroundColor: '#80c783'}} className={styles.legendItemColor}></div>
              <Text>выше среднего, достаточно обеспеченное общество</Text>
            </div>

            <div className={styles.legendItem}>
              <div style={{backgroundColor: '#bddeb3'}} className={styles.legendItemColor}></div>
              <Text>средний, сравнительно обеспеченное население</Text>
            </div>

            <div className={styles.legendItem}>
              <div style={{backgroundColor: '#dcf5d6'}} className={styles.legendItemColor}></div>
              <Text>низкий, удовлетворены основные потребности</Text>
            </div>
          </div>
        </div>
      </Panel>
      <Panel bordered style={{width: '49%', height: '100%'}}>
        <div style={{width: '100%'}}>
          <div style={{display: "flex", columnGap: '1rem', marginBottom: '1rem'}}>
            <SelectPicker data={data} placeholder={'Параметр 1'}/>
            <SelectPicker data={data} placeholder={'Параметр 2'}/>
          </div>
          <div style={{display: 'flex', width: '100%', height: '100%', justifyContent: 'center'}}>
            <div style={{width: '70%'}}>
              <MockScatter/>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
              <Text>Коэффициент корреляции</Text>
              <div style={{
                width: 100,
                height: 100,
                backgroundColor: '#80c783',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 16
              }}>
                <Text weight={'bold'} size={'xxl'}>+7.9</Text>
              </div>
            </div>
          </div>
        </div>
      </Panel>
    </div>
  )
}