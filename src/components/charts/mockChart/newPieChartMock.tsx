'use client'

import ReactECharts from "echarts-for-react";
import {EXTERNAL_DATA_MOCK} from "@/mocks/externalDataMock";
import {useState} from "react";


export const NewPieChartMock = () => {
  const [filteredData, setFilteredData] = useState(EXTERNAL_DATA_MOCK);
  const [history, setHistory] = useState([]);

  const data = filteredData.map(el => {
    return {
      value: 300,
      name: el.name
    }
  })

  // Рекурсивная функция для поиска по имени
  const findItemByName = (data: any, name: any): any => {
    for (const item of data) {
      if (item.name === name) {
        return item;
      }
      if (item.children) {
        const found = findItemByName(item.children, name);
        if (found) {
          return found;
        }
      }
    }
    return null;
  };

  // Функция для фильтрации данных по имени
  const filterDataByName = (name: any): any => {
    const foundItem = findItemByName(EXTERNAL_DATA_MOCK, name);
    if (foundItem && foundItem.children) {
      setHistory([...history, filteredData]); // Сохраняем текущее состояние в историю
      setFilteredData(foundItem.children);
    } else {
      console.log(`No children found for ${name}`);
    }
  };

  // Функция для возврата к предыдущему состоянию
  const goBack = () => {
    if (history.length > 0) {
      const prevData = history.pop(); // Достаем предыдущее состояние
      setHistory([...history]); // Обновляем стек истории
      setFilteredData(prevData); // Восстанавливаем предыдущее состояние данных
    }
  };

  const onChartClick = (params: any) => {
    console.log(`Clicked on: ${params.name}`);
    filterDataByName(params.name); // Фильтруем данные по клику
  };

  const onEvents = {
    click: onChartClick
  };

  const option = {
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: [0, '40%'],
        label: {
          position: 'inner',
          fontSize: 14
        },
        data: [
          {value: 1548, name: 'Социология'},
          {value: 775, name: 'Психология'},
          {value: 679, name: 'Антропология'}
        ]
      },
      {
        name: 'Access From',
        type: 'pie',
        radius: ['50%', '75%'],
        label: {
          position: 'inner',
          fontSize: 14
        },
        // data: [
        //   {value: 500, name: 'Природные'},
        //   {value: 500, name: 'Социальные'},
        //   {value: 500, name: 'Духовные'},
        //   {value: 500, name: 'Экономические'},
        // ]
        data: data
      }
    ]
  };

  return (
    <>
      <ReactECharts
        option={option}
        style={{height: 400, width: '100%'}} // Настройте размеры графика
        onEvents={onEvents}
      />
      <button onClick={goBack} disabled={history.length === 0}>
        Назад
      </button>
    </>
  )
    ;
};