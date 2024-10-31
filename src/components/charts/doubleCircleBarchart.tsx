'use client'

import {useSelector} from "react-redux";
import {selectNewDoubleCircleAnswers} from "@/store/newLongCircleSlice/newCircle.selectors";
import ReactECharts from "echarts-for-react";

export const DoubleCircleBarchart = () => {
  const currentData = useSelector(selectNewDoubleCircleAnswers)

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
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      max: 100
    },
    yAxis: {
      type: 'category',
      //@ts-ignore
      data: currentData ? currentData.labels : null,
    },
    series: currentData ? transformedData : []
  };

  return (
    <div>
      <ReactECharts
        style={{height: 400, width: '100%'}}
        option={option}
        //@ts-ignore
        key={currentData}
      />
    </div>
  );
};