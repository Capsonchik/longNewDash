'use client'

import ReactECharts from "echarts-for-react";
import {EXTERNAL_DATA_MOCK} from "@/mocks/externalDataMock";
import React, {useState} from "react";
import {Button, Modal, Tag, TagGroup, Text} from "rsuite";
import {SUN_DATA} from "@/mocks/sunBurstData";

interface DataItem {
  id?: number;
  value?: number;
  name: string;
  type?: string;
  children?: DataItem[];
  isLast?: boolean;
}


export const NewPieChartMock = () => {
  const [filteredData, setFilteredData] = useState<DataItem[]>(EXTERNAL_DATA_MOCK);
  const [iternalFilterData, setIternalFilterData] = useState<DataItem[]>(SUN_DATA)
  const [history, setHistory] = useState<DataItem[][]>([]); // Стек истории с типом
  const [iternalHistory, setIternalHistory] = useState<DataItem[][]>([])
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [text, setText] = useState<string>('')
  const [currentType, setCurrentType] = useState<'iternal' | 'external' | null>(null)

  const data = filteredData.map(el => {
    return {
      value: 300,
      name: el.name, // Чтобы учесть опечатку
      type: el.type,
      itemStyle: {
        borderRadius: 8,
        borderColor: el.isLast ? '#194a7a' : null,
        borderWidth: 2
      },
    };
  });

  const iternalData = iternalFilterData.map(el => {
    return {
      value: 300,
      name: el.name, // Чтобы учесть опечатку
      type: el.type,
      itemStyle: {
        borderRadius: 8,
        borderWidth: 2
      },
    };
  });


  const removeTag = (tag: any) => {
    const nextTags = selectedItems.filter(item => item !== tag);
    setSelectedItems(nextTags);
  };


  // Рекурсивная функция для поиска по имени
  const findItemByName = (data: DataItem[], name: string): DataItem | null => {
    for (const item of data) {
      if (item.name === name) { // Проверяем оба варианта
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

  // Для внутреннего круга
  const findIternalItemByName = (data: DataItem[], name: string): DataItem | null => {
    for (const item of data) {
      if (item.name === name) { // Проверяем оба варианта
        return item;
      }
      if (item.children) {
        const found = findIternalItemByName(item.children, name);
        if (found) {
          return found;
        }
      }
    }
    return null;
  };

  // Функция для фильтрации данных по имени
  const filterDataByName = (name: string) => {
    const foundItem = findItemByName(EXTERNAL_DATA_MOCK, name);

    if (name === "Назад") {
      goBack();
      return; // Завершаем выполнение функции
    }

    // Если найден элемент и он последний
    if (foundItem && foundItem.isLast) {
      setIsModalOpen(true);
      setText(name);
    } else if (foundItem && foundItem.children) {
      setHistory([...history, filteredData]);
      setFilteredData(foundItem.children);
    } else {
      console.log(`Не найдено чилдренов для ${name}`);
    }
  };

  const filterIternalDataByName = (name: string) => {
    const foundItem = findIternalItemByName(SUN_DATA, name);

    if (name === "Назад") {
      goIternalBack();
      return; // Завершаем выполнение функции
    }

    // Если найден элемент и он последний
    if (foundItem && foundItem.isLast) {
      setIsModalOpen(true);
      setText(name);
    } else if (foundItem && foundItem.children) {
      setIternalHistory([...iternalHistory, iternalFilterData]);
      setIternalFilterData(foundItem.children);
    } else {
      console.log(`Не найдено чилдренов для ${name}`);
    }
  };

  // Функция для возврата к предыдущему состоянию
  const goBack = () => {
    if (history.length > 0) {
      const prevData = history.pop();
      setHistory([...history]);
      setFilteredData(prevData!);
    }
  };

  const goIternalBack = () => {
    if (iternalHistory.length > 0) {
      const prevData = iternalHistory[iternalHistory.length - 1]; // Получаем последние данные из истории
      setIternalHistory(iternalHistory.slice(0, -1)); // Убираем последний элемент из истории
      setIternalFilterData(prevData); // Восстанавливаем внутренние данные
    }
  };

  const onChartClick = (params: any) => {

    params.data.type === 'iternal' ? filterIternalDataByName(params.name) : filterDataByName(params.name)
    setCurrentType(params.data.type);
    console.log('current type', params);
    // filterDataByName(params.name); // Фильтруем данные по клику
  };

  const onEvents = {
    click: onChartClick
  };

  const handleConfirm = () => {
    setSelectedItems([...selectedItems, text]); // Добавляем выбранный элемент в список
    setIsModalOpen(false); // Закрываем модальное окно
    // setFilteredData(EXTERNAL_DATA_MOCK); // Сбрасываем круг к исходным значениям
    currentType === 'external' ? setFilteredData(EXTERNAL_DATA_MOCK) : setIternalFilterData(SUN_DATA)
  };

  const option = {
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: [50, '50%'],
        label: {
          position: 'inner',
          fontSize: 14
        },
        data: iternalData
      },
      {
        name: 'Access From',
        selectedMode: 'multiple',
        type: 'pie',
        radius: ['55%', '80%'],
        label: {
          position: 'inner',
          fontSize: 14
        },
        data: data
      }
    ]
  };

  return (
    <>
      <ReactECharts
        option={option}
        style={{height: 500, width: '100%'}} // Настройте размеры графика
        onEvents={onEvents}
      />

      <TagGroup>
        {selectedItems.map((item, index) => (
          <Tag key={index} closable onClose={() => removeTag(item)}>{item}</Tag>
        ))}
      </TagGroup>

      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Modal.Header>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Text>Добавить {text} к списку фильтров??</Text>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleConfirm} appearance="primary">
            Добавить
          </Button>
          <Button onClick={() => setIsModalOpen(false)} appearance="subtle">
            Отменить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
};