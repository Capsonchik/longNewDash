import styles from './styles.module.scss'
import {CheckPicker, SelectPicker} from "rsuite";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {AppDispatch} from "@/store/store";
import {setIndexes} from "@/store/store.slice";
import {MockLineChart} from "@/components/charts/mockChart/mockLineChart";
import {REGION} from "@/mocks/regionInfoMock";
import {MonthPiker} from "@/components/rangePickers/monthPicker/MonthPiker";

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
  const [selectedRomir, setSelectedRomir] = useState<string[]>([]);
  const [selectedParams, setSelectedParams] = useState<string[]>([]);
  const [selectedConsumerPanel, setSelectedConsumerPanel] = useState<string[]>([]);
  const [selectedExternalFactors, setSelectedExternalFactors] = useState<string[]>([]);

  // Собираем все выбранные значения в один массив
  const [combinedSelections, setCombinedSelections] = useState<string[]>([]);

  useEffect(() => {
    // Обновляем массив при изменении любого из состояний
    setCombinedSelections([
      ...selectedRomir,
      ...selectedParams,
      ...selectedConsumerPanel,
      ...selectedExternalFactors
    ]);
    dispatch(setIndexes(combinedSelections));
  }, [selectedRomir, selectedParams, selectedConsumerPanel, selectedExternalFactors, dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.romir} style={{overflow: 'auto'}}>
        <CheckPicker
          data={data}
          value={selectedRomir}
          onChange={setSelectedRomir}
          placeholder={'Индексы ромир'}
          style={{width: 250, overflow: 'auto'}}
        />
        <CheckPicker
          data={data2}
          value={selectedParams}
          onChange={setSelectedParams}
          placeholder={'Параметры'}
          style={{width: 250, overflow: 'auto'}}
        />
        <CheckPicker
          data={data3}
          value={selectedConsumerPanel}
          onChange={setSelectedConsumerPanel}
          placeholder={'Потребительская панель'}
          style={{width: 250, overflow: 'auto'}}
        />
        <CheckPicker
          data={data4}
          value={selectedExternalFactors}
          onChange={setSelectedExternalFactors}
          placeholder={'Внешние факторы'}
          style={{width: 250, overflow: 'auto'}}
        />
      </div>
      <div className={styles.filters}>
        <SelectPicker data={region} placeholder={'Выберите регион'}/>
        <MonthPiker/>
      </div>
      <MockLineChart indexes={combinedSelections}/>
    </div>
  );
};