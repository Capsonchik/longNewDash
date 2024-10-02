'use client'

import ReactECharts from "echarts-for-react";

type Props = {};

export const MobileBarChart = (props: Props) => {
  const option = {
    xAxis: {
      type: 'category',
      data: ['Пон.', 'Вт.', 'Ср.', 'Чт.', 'Пт.', 'Сб.', 'Вск.']
    },
    yAxis: {
      type: 'value'
    },
    legend: {
      data: ['Пользователи ПК', 'Пользователи мобильных']
    },
    series: [
      {
        name: 'Пользователи ПК',
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        barWidth: '20%',
        itemStyle: {
          // color: '#FF8200',
          color: '#194a7a',
          borderRadius: [10, 10, 0, 0]
        }
      },
      {
        name: 'Пользователи мобильных',
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        barWidth: '20%',
        itemStyle: {
          color: '#ccc',
          borderRadius: [10, 10, 0, 0]
        }
      }
    ]
  };

  return (
    <div>
      <ReactECharts
        option={option}
        style={{height: '375px', width: '100%'}}
        opts={{renderer: 'svg'}}
      />
    </div>
  );
};