import styles from './styles.module.scss'
import {CheckPicker} from "rsuite";
import {useEffect, useState} from "react";

export const Content = () => {
  const mock = ['test1', 'test2', 'test3'];
  const mock2 = ['test4', 'test5'];
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
  }, [selectedRomir, selectedParams, selectedConsumerPanel, selectedExternalFactors]);

  return (
    <div className={styles.container}>
      <div className={styles.romir}>
        <CheckPicker
          data={data}
          value={selectedRomir}
          onChange={setSelectedRomir}
          placeholder={'Индексы ромир'}
        />
        <CheckPicker
          data={data2}
          value={selectedParams}
          onChange={setSelectedParams}
          placeholder={'Параметры'}
        />
        <CheckPicker
          data={data3}
          value={selectedConsumerPanel}
          onChange={setSelectedConsumerPanel}
          placeholder={'Потребительская панель'}
        />
        <CheckPicker
          data={data4}
          value={selectedExternalFactors}
          onChange={setSelectedExternalFactors}
          placeholder={'Внешние факторы'}
        />
      </div>
    </div>
  );
};