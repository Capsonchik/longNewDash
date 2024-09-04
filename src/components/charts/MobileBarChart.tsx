'use client'
import ReactECharts from "echarts-for-react";

type Props = {};

export const MobileBarChart = (props: Props) => {
  const option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        barWidth: '20%',
        itemStyle: {
          color: '#2469ce',
          borderRadius: [10, 10, 0, 0]
        }
      },
      {
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