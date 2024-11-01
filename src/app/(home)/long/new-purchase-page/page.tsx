import styles from './styles.module.scss';
import {Panel, Text} from "rsuite";
import {NewPieChartMock} from "@/components/charts/mockChart/newPieChartMock";
import {MockScatter} from "@/components/charts/mockChart/mockScatter";
import {MonthPiker} from "@/components/rangePickers/monthPicker/MonthPiker";
import {RegionPicker} from "@/components/filters/regionFilter/RegionPicker";
import {DoubleCircleBarchart} from "@/components/charts/doubleCircleBarchart";
import {Paragraph} from "@/components/placeHolder/Paragraph";
import {MapWhite} from "@/components/mapWhite/MapWhite";

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
          {/*<MockLineChart indexes={['Параметр 1', 'Параметр 2', 'Параметр 3']}/>*/}
          <DoubleCircleBarchart/>
          <div className={styles.scatterBlock}>
            <div className={styles.scatterLeft}>
              <MockScatter/>
            </div>
            <div className={styles.scatterRight}>
              <Text size={'md'}>Коэффициент корреляции</Text>
              <div className={styles.correlationIndex}>
                <Text weight={'semibold'} size={34}>7.3</Text>
              </div>
              <Paragraph rowNumber={7}/>
            </div>
          </div>
        </Panel>
      </div>
      <Panel bordered>
        {/*<MapBig currentValue={''}/>*/}
        <MapWhite currentValue={''}/>
      </Panel>
    </div>
  )
}