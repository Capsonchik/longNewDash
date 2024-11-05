'use client'

import {useSelector} from "react-redux";
import {selectHiData, selectHiDataError, selectHiDataLoader} from "@/store/newLongCircleSlice/newCircle.selectors";
import {HiType} from "@/types/hiType";
import {Panel, Text} from "rsuite";
import {generateColors} from "@/helpers/generateColors";
import {Paragraph} from "@/components/placeHolder/Paragraph";

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
        <div style={{display: "flex", justifyContent: 'space-between', alignItems: 'center'}}>
          <Panel bordered style={{width: '32%'}}>

            <div style={{
              width: '100%',
              height: 80,
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'center',
              fontSize: 32,
              fontWeight: 'bold'
            }}>{hiData?.chi2}</div>
            <Text weight={'semibold'} muted>Хи-квадрат</Text>
          </Panel>
          <Panel bordered style={{width: '32%'}}>
            <div style={{
              width: '100%',
              height: 80,
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'center',
              fontSize: 32,
              fontWeight: 'bold'
            }}>{hiData?.p}</div>
            <Text weight={'semibold'} muted>P-value</Text>
          </Panel>
          <Panel bordered style={{width: '32%'}}>
            {/*<div style={{*/}
            {/*  width: '100%',*/}
            {/*  height: 80,*/}
            {/*  display: 'flex',*/}
            {/*  justifyContent: 'start',*/}
            {/*  alignItems: 'center',*/}
            {/*  fontSize: 32,*/}
            {/*  fontWeight: 'bold'*/}
            {/*}}>{hiData?.dof}</div>*/}
            {/*<Text weight={'semibold'} muted>Степени свободы</Text>*/}
            <Paragraph rowNumber={4}/>
          </Panel>
        </div>
      ) : (
        <div
          style={{height: 143, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Text>выберете параметры</Text>
        </div>
      )}
    </>

  );
};