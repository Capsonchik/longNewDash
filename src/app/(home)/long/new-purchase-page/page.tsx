import styles from './styles.module.scss';
import {Panel, Text} from "rsuite";
import {NewPieChartMock} from "@/components/charts/mockChart/newPieChartMock";
import {MapBig} from "@/components/mapBig/MapBig";
import {MockLineChart} from "@/components/charts/mockChart/mockLineChart";
import {MockScatter} from "@/components/charts/mockChart/mockScatter";
import {MonthPiker} from "@/components/rangePickers/monthPicker/MonthPiker";
import {RegionPicker} from "@/components/filters/regionFilter/RegionPicker";

export default function Page() {
  return (
    <div className={styles.panelsBlock}>
      <Panel bordered className={styles.filters}>
        <RegionPicker/>
        <MonthPiker/>
      </Panel>
      <div className={styles.topPanelBlock}>
        <Panel bordered className={styles.panelLeft}>
          <Text weight={'semibold'} size={16}>Выберите параметры на лонгитюдном круге</Text>
          <NewPieChartMock/>
        </Panel>
        <Panel bordered className={styles.panelRight}>
          <Text weight={'semibold'} size={16}>Посмотрите визуализацию взаимосвязи выбранных параметров</Text>
          <MockLineChart indexes={['Параметр 1', 'Параметр 2', 'Параметр 3']}/>
          <MockScatter/>
        </Panel>
      </div>
      <Panel bordered>
        <MapBig currentValue={''}/>
      </Panel>
    </div>
  )
}