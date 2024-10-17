import styles from './styles.module.scss'
import {CheckPicker, CheckTreePicker, Panel, SelectPicker} from "rsuite";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {AppDispatch} from "@/store/store";
import {setIndexes} from "@/store/store.slice";
import {MockLineChart} from "@/components/charts/mockChart/mockLineChart";
import {REGION} from "@/mocks/regionInfoMock";
import {MonthPiker} from "@/components/rangePickers/monthPicker/MonthPiker";
import {CHECK_TREE_MOCK_2} from "@/mocks/checkTreeMock";

export const Content = () => {
  const dispatch = useDispatch<AppDispatch>();

  const mock = ['Дефлятор FMCG', 'Индекс свободных денег', 'Индекс благосостояния'];
  const mock2 = ['Среднемесячный доход на одного члена семьи за последний месяц, руб.', 'Процент дохода, откладываемый на сбережения', 'Доля расходов на еду и коммунальные услуги в общих доходах домохозяйства', 'Оценка материального положения семьи'];
  const mock3 = ['test6', 'test7'];
  const mock4 = ['test8', 'test9'];

  const data = mock.map((item) => ({
    label: item,
    value: item,
  }));

  const data2 = mock2.map((item) => ({
    label: item,
    value: item,
  }));

  const data3 = mock3.map((item) => ({
    label: item,
    value: item,
  }));

  const data4 = mock4.map((item) => ({
    label: item,
    value: item,
  }));

  const region = REGION.map((item) => ({
    label: item,
    value: item,
  }));

  // Используем состояния для каждого пикера
  // const [selectedRomir, setSelectedRomir] = useState<string[]>(['Индекс свободных денег']);
  const [selectedParams, setSelectedParams] = useState<string[]>(['Среднемесячный доход на одного члена семьи за последний месяц, руб.']);
  // const [selectedConsumerPanel, setSelectedConsumerPanel] = useState<string[]>(['test6']);
  // const [selectedExternalFactors, setSelectedExternalFactors] = useState<string[]>(['test9']);

  // Собираем все выбранные значения в один массив
  const [combinedSelections, setCombinedSelections] = useState<string[]>([]);

  const [tree, setTree] = useState<any>(['Хронотип'])

  useEffect(() => {
    // Обновляем массив при изменении любого из состояний
    setCombinedSelections([
      // ...selectedRomir,
      ...selectedParams,
      ...tree
      // ...selectedConsumerPanel,
      // ...selectedExternalFactors
    ]);
    dispatch(setIndexes(combinedSelections));
  }, [selectedParams, tree, dispatch]);


  return (
    <div className={styles.container}>
      <Panel bordered className={styles.panel}>
        <div className={styles.romir} style={{overflow: 'auto'}}>
          <CheckTreePicker
            data={CHECK_TREE_MOCK_2}
            value={tree}
            onChange={setTree}
            placeholder={'Данные РОМИР'}
          />
          {/*<CheckPicker*/}
          {/*  defaultValue={['Индекс свободных денег']}*/}
          {/*  data={data}*/}
          {/*  value={selectedRomir}*/}
          {/*  onChange={setSelectedRomir}*/}
          {/*  placeholder={'Данные РОМИР'}*/}
          {/*  style={{width: 250, overflow: 'auto'}}*/}
          {/*/>*/}
          <CheckPicker
            data={data2}
            value={selectedParams}
            onChange={setSelectedParams}
            placeholder={'Прочие источники'}
            style={{width: 250, overflow: 'auto'}}
          />
          {/*<CheckPicker*/}
          {/*  data={data3}*/}
          {/*  value={selectedConsumerPanel}*/}
          {/*  onChange={setSelectedConsumerPanel}*/}
          {/*  placeholder={'Потребительская панель'}*/}
          {/*  style={{width: 250, overflow: 'auto'}}*/}
          {/*/>*/}
          {/*<CheckPicker*/}
          {/*  data={data4}*/}
          {/*  value={selectedExternalFactors}*/}
          {/*  onChange={setSelectedExternalFactors}*/}
          {/*  placeholder={'Внешние факторы'}*/}
          {/*  style={{width: 250, overflow: 'auto'}}*/}
          {/*/>*/}
        </div>
      </Panel>
      <Panel bordered className={styles.panel}>
        <div className={styles.filters}>
          <SelectPicker data={region} placeholder={'Выберите параметр'}/>
          <MonthPiker/>
        </div>
        <MockLineChart indexes={combinedSelections}/>
      </Panel>
    </div>
  );
};