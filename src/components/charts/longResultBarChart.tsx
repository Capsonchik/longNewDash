'use client'

import ReactECharts from "echarts-for-react";
import {useSelector} from "react-redux";
import {selectAnswersResponse} from "@/store/answersSlice/answers.selectors";

export const LongResultBarChart = () => {
  const currentData = useSelector(selectAnswersResponse)
  //@ts-ignore
  const transformedData = (currentData && currentData.data) ? currentData.data.map((item) => {
    //@ts-ignore
    const total = item.stat.reduce((sum, value) => sum + value, 0);
    //@ts-ignore
    const percentageData = item.stat.map((value) => (value / total) * 100);

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
      data: percentageData // предположим, что вы хотите использовать процентные данные
    };
  }) : [];

  // const transformedData = currentData && currentData.data.map((item) => {
  //   const total = item.stat.reduce((sum, value) => sum + value, 0);
  //   const percentageData = item.stat.map((value) => (value / total) * 100);
  //
  //
  //   return {
  //     name: item.label,
  //     type: 'bar',
  //     stack: 'total',
  //     label: {
  //       show: true,
  //       // formatter: ({value}) => `${value.toFixed(2)}%`
  //     },
  //     emphasis: {
  //       focus: 'series'
  //     },
  //     data: item.stat
  //   };
  // });

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      // formatter: (params) => {
      //   let tooltipText = '';
      //   params.forEach(param => {
      //     tooltipText += `${param.seriesName}: ${param.value.toFixed(2)}%<br/>`;
      //   });
      //   return tooltipText;
      // }
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