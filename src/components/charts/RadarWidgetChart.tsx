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
        {name: 'Продажи', max: 6500},
        {name: 'Администрация', max: 16000},
        {name: 'Технологии', max: 30000},
        {name: 'Поддержка', max: 38000},
        {name: 'Разработка', max: 52000},
        {name: 'Маркетинг', max: 25000}
      ]
    },
    series: [
      {
        name: 'Budget vs spending',
        type: 'radar',
        lineStyle: {
          color: '#FF8200'
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
        style={{height: '335px', width: '100%'}} // Настройте размеры графика
        opts={{renderer: 'svg'}} // Выберите рендерер: 'canvas' или 'svg'
      />
    </div>
  );
};