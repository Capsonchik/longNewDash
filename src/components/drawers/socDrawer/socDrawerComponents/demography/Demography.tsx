import styles from './styles.module.scss'
import {Heading, SelectPicker} from "rsuite";
import {MAP_REGIONS} from "@/mocks/regionInfoMock";
import {MonthPiker} from "@/components/rangePickers/monthPicker/MonthPiker";
import {MockLineChart} from "@/components/charts/mockChart/mockLineChart";
import {MockScatter} from "@/components/charts/mockChart/mockScatter";
import {
  IndexesCheckBoxGroup
} from "@/components/drawers/socDrawer/socDrawerComponents/indexesCheckboxGroup/IndexesCheckBoxGroup";

export const Demography = () => {

  const INDEXES = ['Индекс процентов', 'Индекс п.п', 'Индекс руб.']

  const data = MAP_REGIONS.map(item => ({label: item, value: item}));
  const indexesData = INDEXES.map(item => ({label: item, value: item}));

  return (
    <div className={styles.container}>
      <div className={styles.containerLeft}>
        {/*<Heading level={4}>Репродуктивные планы</Heading>*/}
        <SelectPicker
          data={indexesData}
          placeholder={'Выберите индекс'}
        />
        <Heading level={4}>Индексы РОМИР</Heading>
        <IndexesCheckBoxGroup/>
      </div>
      <div className={styles.containerRight}>
        <div className={styles.filters}>
          <SelectPicker data={data} placeholder={'Выберите регион'}/>
          <MonthPiker/>
        </div>
        <MockLineChart indexes={INDEXES}/>
        <Heading level={6}>Корреляция</Heading>
        <div className={styles.minGraphs}>
          <MockScatter/>
          <MockScatter/>
        </div>
      </div>
    </div>
  );
};