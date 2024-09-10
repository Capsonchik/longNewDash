'use client'


import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "@/store/store";
import {fetchGetSecondDefaultSunBurst} from "@/store/secondSunBirstSlice/secondSunBurst.actions";
import {SunItems} from "@/types/sunDataTypes";
import {
  selectSecondBackData,
  selectSecondSunData,
  selectSecondSunDataKey
} from "@/store/secondSunBirstSlice/secondSunBurst.selectors";
import {Button} from "rsuite";
import ReactECharts from "echarts-for-react";

export const SecondSunBurst = () => {
  const dispatch = useDispatch<AppDispatch>();

  const sunData = useSelector(selectSecondSunData);
  const key = useSelector(selectSecondSunDataKey);
  const backData = useSelector(selectSecondBackData);

  const [currentData, setCurrentData] = useState<SunItems | []>();

  const chartRef = useRef(null);

  useEffect(() => {
    dispatch(fetchGetSecondDefaultSunBurst())
  }, [dispatch]);

  useEffect(() => {
    setCurrentData(sunData);
    if (chartRef.current) {
      //@ts-ignore
      chartRef.current.getEchartsInstance().setOption({
        series: [{data: sunData}]
      });
    }
  }, [sunData]);

  const option = {
    tooltip: {
      trigger: 'item',
      formatter: function (params: any) {
        return params.name;
      }
    },
    series: {
      type: 'sunburst',
      data: currentData,
      radius: [0, '90%'],
      label: {
        rotate: 'horizontal',
        overflow: 'truncate',
        ellipsis: '...',
        formatter: function (params: any) {
          const maxLabelLength = 10;
          const label = params.name;
          if (label.length > maxLabelLength) {
            return label.substring(0, maxLabelLength) + '...';
          }
          return label;
        }
      },
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
    }
  };

  return (
    <div>
      <Button
        // onClick={handleBack}
        appearance={'primary'}
        color={'blue'}
        disabled={backData === null}
      >
        Назад
      </Button>
      <ReactECharts
        option={option}
        ref={chartRef}
        key={key}
        style={{height: 400, width: 400}}
        // onEvents={onEvents}
      />
    </div>
  );
};