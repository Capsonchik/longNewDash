'use client'

import ReactECharts from "echarts-for-react";

export const BrowserPieChart = () => {
  const option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        padAngle: 5,
        itemStyle: {
          borderRadius: 10
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          {value: 1048, name: 'Поиск'},
          {value: 735, name: 'Директ'},
          {value: 580, name: 'Мэил'},
          {value: 484, name: 'Реклама'},
          {value: 300, name: 'Видео'}
        ]
      }
    ]
  };

  return (
    <div>
      <ReactECharts
        option={option}
        style={{height: '395px', width: '100%'}} // Настройте размеры графика
        opts={{renderer: 'svg'}} // Выберите рендерер: 'canvas' или 'svg'
      />
    </div>
  );
};