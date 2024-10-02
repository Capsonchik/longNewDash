'use client'

import ReactECharts from 'echarts-for-react';

type Props = {};
export const RadarWidgetChart = (props: Props) => {
  const option = {
    // title: {
    //   text: 'Basic Radar Chart'
    // },
    legend: {
      data: ['Allocated Budget', 'Actual Spending']
    },
    radar: {
      // shape: 'circle',
      indicator: [
        {name: 'Девочка', max: 6500},
        {name: 'Девушка', max: 16000},
        {name: 'Женщина', max: 30000},
        {name: 'Мальчик', max: 38000},
        {name: 'Парень', max: 52000},
        {name: 'Мужчина', max: 25000}
      ]
    },
    series: [
      {
        name: 'Budget vs spending',
        type: 'radar',
        lineStyle: {
          // color: '#FF8200'
          color: '#194a7a'
        },
        data: [
          {
            value: [4200, 3000, 20000, 35000, 50000, 18000],
            // name: 'Allocated Budget'
          },
        ]
      }
    ]
  };

  return (
    <div>
      <ReactECharts
        option={option}
        style={{height: '305px', width: '100%'}} // Настройте размеры графика
        opts={{renderer: 'svg'}} // Выберите рендерер: 'canvas' или 'svg'
      />
    </div>
  );
};