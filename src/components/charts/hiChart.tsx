'use client'

import {useSelector} from "react-redux";
import {selectHiData, selectHiDataError, selectHiDataLoader} from "@/store/newLongCircleSlice/newCircle.selectors";
import ReactECharts from "echarts-for-react";
import {HiType} from "@/types/hiType";
import {Text} from "rsuite";
import {generateColors} from "@/helpers/generateColors";

export const HiChart = () => {
  const hiData = useSelector(selectHiData) as HiType | undefined;
  const hiDataError = useSelector(selectHiDataError);
  const hiDataLoader = useSelector(selectHiDataLoader);

  // const hiLength = hiData && hiData.data.length
  const hiLength = hiData ? hiData.data.length : 10;

  const transformedData = hiData && hiData.data.map((item) => {
    const total = item.stat.reduce((sum, value) => sum + value, 0);
    const percentageData = item.stat.map((value) => (value / total) * 100);


    return {
      name: item.label,
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
        // formatter: ({value}) => `${value.toFixed(2)}%`
      },
      emphasis: {
        focus: 'series'
      },
      data: item.stat
    };
  });

  const option = {
    color: generateColors(['#194a7a'], hiLength),
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // Use axis to trigger tooltip
        type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
      }
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
      data: hiData?.labels
    },
    series: transformedData
  };

  return (
    <>
      {hiData !== undefined ? (
        <ReactECharts
          style={{height: 300, width: '100%'}}
          option={option}
        />
      ) : (
        <div style={{height: 300, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Text>выберете параметры</Text>
        </div>

      )
      }
    </>

  );
};