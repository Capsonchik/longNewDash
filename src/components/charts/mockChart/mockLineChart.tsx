'use client'

import ReactECharts from "echarts-for-react";
import {Divider} from "rsuite";

type Props = {
  indexes: string[]
}

export const MockLineChart = ({indexes}: Props) => {
  // const indexes = useSelector(selectIndexes);

  const renderIndexes = indexes.map((item) => {
    return {
      name: item,
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210]
    }
  })

  const option = {
    // title: {
    //   text: 'Stacked Line'
    // },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: indexes
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
    series: renderIndexes
  };

  return (
    <>
      {indexes.length === 0 ? (
        <div
          style={{height: 400, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
        >
          <Divider>Выберите индекс</Divider>
        </div>
      ) : (
        <ReactECharts
          key={indexes.join(',')}
          option={option}
          style={{height: 400, width: '100%'}} // Настройте размеры графика
        />
      )}
    </>
  );
};