'use client'

import ReactECharts from "echarts-for-react";

export const MockLineChart = () => {
  const option = {
    // title: {
    //   text: 'Stacked Line'
    // },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Планируют детей в ближайший год', 'Среднесуточная температура, градусов', 'Средневзвешенный курс рубля к долл. США']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Планируют детей в ближайший год',
        type: 'line',
        stack: 'Total',
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Среднесуточная температура, градусов',
        type: 'line',
        stack: 'Total',
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'Средневзвешенный курс рубля к долл. США',
        type: 'line',
        stack: 'Total',
        data: [150, 232, 201, 154, 190, 330, 410]
      },
    ]
  };

  return (
    <ReactECharts
      option={option}
      style={{height: 400, width: '100%'}} // Настройте размеры графика
    />
  );
};