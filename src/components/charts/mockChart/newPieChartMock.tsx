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
  const [iternalFilterData, setIternalFilterData] = useState<DataItem[]>(SUN_DATA);
  const [history, setHistory] = useState<DataItem[][]>([]);
  const [iternalHistory, setIternalHistory] = useState<DataItem[][]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [text, setText] = useState<string>('');
  const [currentType, setCurrentType] = useState<'iternal' | 'external' | null>(null);

  const sharedItemStyle = {
    borderRadius: 8,
    borderWidth: 2,
  };

  const mapData = (data: DataItem[], isLastBorderColor?: string) =>
    data.map(el => ({
      value: 300,
      name: el.name,
      type: el.type,
      itemStyle: {
        ...sharedItemStyle,
        borderColor: el.isLast ? isLastBorderColor : null,
      },
    }));

  const data = mapData(filteredData, '#194a7a');
  const iternalData = mapData(iternalFilterData);

  const removeTag = (tag: string) => {
    setSelectedItems(selectedItems.filter(item => item !== tag));
  };

  // Универсальная функция поиска по имени
  const findItemByName = (data: DataItem[], name: string): DataItem | null => {
    for (const item of data) {
      if (item.name === name) {
        return item;
      }
      if (item.children) {
        const found = findItemByName(item.children, name);
        if (found) return found;
      }
    }
    return null;
  };

  // Универсальная функция фильтрации данных
  const filterData = (name: string, data: DataItem[], setData: Function, setHistory: Function, history: DataItem[][]) => {
    const foundItem = findItemByName(data, name);

    if (name === "Назад") {
      goBack(setData, setHistory, history);
      return;
    }

    if (foundItem && foundItem.isLast) {
      setIsModalOpen(true);
      setText(name);
    } else if (foundItem && foundItem.children) {
      setHistory([...history, data]);
      setData(foundItem.children);
    } else {
      console.log(`Не найдено чилдренов для ${name}`);
    }
  };

  const goBack = (setData: Function, setHistory: Function, history: DataItem[][]) => {
    if (history.length > 0) {
      const prevData = history[history.length - 1];
      setHistory(history.slice(0, -1));
      setData(prevData);
    }
  };

  const onChartClick = (params: any) => {
    if (params.data.type === 'iternal') {
      filterData(params.name, iternalFilterData, setIternalFilterData, setIternalHistory, iternalHistory);
    } else {
      filterData(params.name, filteredData, setFilteredData, setHistory, history);
    }
    setCurrentType(params.data.type);
  };

  const onEvents = {click: onChartClick};

  const handleConfirm = () => {
    setSelectedItems([...selectedItems, text]);
    setIsModalOpen(false);
    currentType === 'external' ? setFilteredData(EXTERNAL_DATA_MOCK) : setIternalFilterData(SUN_DATA);
  };

  const option = {
    tooltip: {
      trigger: 'item',
      formatter: function (params: any) {
        return params.name;
      }
    },
    label: {
      rotate: 'horizontal',
      overflow: 'truncate',
      ellipsis: '...',
      formatter: function (params: any) {
        const maxLabelLength = 10;
        const label = params.name;
        if (label.length > maxLabelLength) {
          return label.substring(0, maxLabelLength) + '...';
        }
        return label;
      }
    },
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
        data: mapData(filteredData, '#194a7a')
      }
    ]
  };

  return (
    <>
      <ReactECharts option={option} style={{height: 500, width: '100%'}} onEvents={onEvents}/>

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
          <Text>Добавить {text} к списку фильтров?</Text>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleConfirm} appearance="primary">Добавить</Button>
          <Button onClick={() => setIsModalOpen(false)} appearance="subtle">Отменить</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
