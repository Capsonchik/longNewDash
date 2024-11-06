'use client'

import {useSelector} from "react-redux";
import {selectNewDoubleCircleAnswers} from "@/store/newLongCircleSlice/newCircle.selectors";
import ReactECharts from "echarts-for-react";
import {generateColors} from "@/helpers/generateColors";

export const DoubleCircleBarchart = () => {
  const currentData = useSelector(selectNewDoubleCircleAnswers)

  const renderGraph = () => {
    return (
      <ReactECharts
        style={{height: 500, width: '100%'}}
        option={option}
        //@ts-ignore
        key={currentData}
      />
    )
  }

  //@ts-ignore
  const test = currentData && currentData.data ? currentData.data.length : 10

  //@ts-ignore
  const transformedData = (currentData && currentData.data) ? currentData.data.map((item) => {
    //@ts-ignore
    // const total = item.stat.reduce((sum, value) => sum + value, 0);
    // //@ts-ignore
    // const percentageData = item.stat.map((value) => (value / total) * 100);

    return {
      name: item.label,
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
        formatter: ({value}: any) => `${value.toFixed(2)}%`
      },
      emphasis: {
        focus: 'series'
      },
      data: item.stat
    };
  }) : [];


  const option = {
    color: generateColors(['#194a7a'], test),
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      orient: 'vertical',
      right: '0%',  // Отступ от правого края
      top: 50,  // Центрируем легенду по вертикали
      // @ts-ignore
      data: currentData && currentData.data ? currentData.data.map((item: any) => item.label).reverse() : [],
      formatter: function (name: any) {
        return name.length > 15 ? name.substring(0, 35) + '...' : name; // Ограничение длины
      }
    },
    grid: {
      left: '0%',
      right: '30%', // Оставим место для легенды
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      //@ts-ignore
      data: currentData ? currentData.labels : null,
      axisLabel: {
        show: false  // Скрываем подписи
      }
    },
    yAxis: {
      type: 'value',
      max: 100
    },
    series: currentData ? transformedData : []
  };

  return (
    <div style={{zIndex: '-9999'}}>
      {Object.keys(currentData).length > 0
        ? renderGraph()
        : (
          <div
            style={{height: 500, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
          >
            Выберите параметры в круге
          </div>
        )
      }
    </div>
  );
};