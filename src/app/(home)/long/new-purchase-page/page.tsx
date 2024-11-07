import styles from './styles.module.scss';
import {Divider, Panel, Text} from "rsuite";
import {NewPieChartMock} from "@/components/charts/mockChart/newPieChartMock";
import {DoubleCircleBarchart} from "@/components/charts/doubleCircleBarchart";
import {HeatMap} from "@/components/newPurchaseComponents/heatMap/HeatMap";
import {HiChart} from "@/components/charts/hiChart";
import {getCurrentDate} from "@/helpers/dateHalpers";

export default function Page() {


  return (
    <div className={styles.panelsBlock}>
      <Panel bordered className={styles.filters} shaded>
        {/* Временно убрали, заменили на другое */}
        {/*<RegionPicker/>*/}
        {/*<MonthPiker/>*/}
        <Text weight={'semibold'}>
          Обновлено <Divider vertical/> {getCurrentDate()}</Text>
      </Panel>
      <div className={styles.topPanelBlock}>
        <Panel bordered className={styles.panelLeft} shaded>
          <Text weight={'semibold'} size={16}>Выберите параметры на лонгитюдном круге</Text>
          <NewPieChartMock/>
        </Panel>
        <div className={styles.panelRight}>

          <Panel bordered shaded>
            <Text weight={'semibold'} size={16}>Посмотрите визуализацию взаимосвязи выбранных параметров</Text>
            {/*<MockLineChart indexes={['Параметр 1', 'Параметр 2', 'Параметр 3']}/>*/}
            <DoubleCircleBarchart/>
          </Panel>

          {/*<Panel bordered shaded>*/}
          {/*  <div className={styles.scatterBlock}>*/}
          {/*    <div className={styles.scatterLeft}>*/}
          {/*      <MockScatter/>*/}
          {/*    </div>*/}
          {/*    */}
          {/*    <div className={styles.scatterRight}>*/}
          {/*      <Text size={'md'}>Коэффициент корреляции</Text>*/}
          {/*      <div className={styles.correlationIndex}>*/}
          {/*        <Text weight={'semibold'} size={34}>7.3</Text>*/}
          {/*      </div>*/}
          {/*      <Paragraph rowNumber={7}/>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</Panel>*/}

          <Panel bordered shaded>
            <Text weight={'semibold'} size={16} style={{marginBottom: '1rem'}}>Коэффициенты связи</Text>
            <HiChart/>
          </Panel>

        </div>
      </div>

      <HeatMap/>

    </div>
  )
}