'use client'

import ReactECharts from "echarts-for-react";
import {EXTERNAL_DATA_MOCK} from "@/mocks/externalDataMock";
import React, {useState} from "react";
import {Button, Modal, Tag, TagGroup, Text} from "rsuite";
import {SUN_DATA} from "@/mocks/sunBurstData";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "@/store/store";
import {
  fetchGetNewFirstAnswer,
  fetchGetNewSecondAnswer,
  fetchPostNewSunData
} from "@/store/newLongCircleSlice/newCircle.actions";
import {setCurrentData, setFirstQuestion, setSecondQuestion} from "@/store/newLongCircleSlice/newSircle.slice";
import {
  selectIsNewCircleAnswersLoading,
  selectNewFirstAnswer,
  selectNewFirstQuestion,
  selectNewSecondAnswer,
  selectNewSecondQuestion
} from "@/store/newLongCircleSlice/newCircle.selectors";

interface DataItem {
  id?: number;
  value?: number;
  name: string;
  type?: string;
  children?: DataItem[];
  isLast?: boolean;
}


export const NewPieChartMock = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [filteredData, setFilteredData] = useState<DataItem[]>(EXTERNAL_DATA_MOCK);
  const [iternalFilterData, setIternalFilterData] = useState<DataItem[]>(SUN_DATA);
  const [history, setHistory] = useState<DataItem[][]>([]);
  const [iternalHistory, setIternalHistory] = useState<DataItem[][]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [text, setText] = useState<string>('');
  const [currentType, setCurrentType] = useState<'iternal' | 'external' | null>(null);
  const [disableBtn, setDisableBtn] = useState(false)

  const question1 = useSelector(selectNewFirstQuestion)
  const question2 = useSelector(selectNewSecondQuestion)
  const answ1 = useSelector(selectNewFirstAnswer)
  const answ2 = useSelector(selectNewSecondAnswer)
  const loader = useSelector(selectIsNewCircleAnswersLoading)

  const handlePostAnswers = () => {
    dispatch(fetchPostNewSunData({
      question1: question1,
      question2: question2,
      answ1: answ1,
      answ2: answ2
    }))

    if (question2 !== '') {
      setDisableBtn(true)
    }
  }

  const handleReloadCircle = () => {
    dispatch(setFirstQuestion(''))
    dispatch(setSecondQuestion(''))
    setSelectedItems([])
    setDisableBtn(false)
    dispatch(setCurrentData())
  }

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

    if (!!foundItem?.isLast && question1 === '') {
      dispatch(fetchGetNewFirstAnswer(foundItem.name));
      dispatch(setFirstQuestion(foundItem.name));
    } else if (!!foundItem?.isLast && question2 === '') {
      dispatch(fetchGetNewSecondAnswer(foundItem.name));
      dispatch(setSecondQuestion(foundItem.name));
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
    <div>
      <TagGroup>
        {selectedItems.length
          ? (
            selectedItems.map((item, index) => (
              // <Tag key={index} closable onClose={() => removeTag(item)}>{item}</Tag>
              <Tag key={index}>{item}</Tag>
            ))
          )
          : <Text style={{marginTop: '.5rem', marginLeft: 10}}>В этом разделе появятся выбранные параметры</Text>
        }
      </TagGroup>

      <ReactECharts option={option} style={{height: 500, width: '100%'}} onEvents={onEvents}/>

      <Button
        style={{width: '100%'}}
        appearance={'primary'}
        onClick={handlePostAnswers}
        disabled={disableBtn}
        loading={loader}
      >
        Получить результат
      </Button>

      <Button
        style={{width: '100%', marginTop: '.5rem'}}
        appearance={'ghost'}
        onClick={handleReloadCircle}
      >
        Сбросить
      </Button>


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
    </div>
  );
};
