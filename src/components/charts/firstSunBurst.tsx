'use client'

import ReactECharts from "echarts-for-react";
import {useDispatch, useSelector} from "react-redux";
import {
  setCurrentValue,
  setFirstBackData,
  setFirstCategoryId,
  setFirstScaleType
} from "@/store/firstSunBurstSlice/firstSunBurst.slice";
import {
  selectFirstBackData,
  selectFirstDataKey,
  selectFirstSunData
} from "@/store/firstSunBurstSlice/firstSunBurst.selectors";
import {
  fetchGetBackData,
  fetchGetDefaultSunBurst,
  fetchGetNextSunBurst,
  fetchGetSunBurstBack
} from "@/store/firstSunBurstSlice/firstSunBirst.actions";
import {useEffect, useRef, useState} from "react";
import {SunItems} from "@/types/sunDataTypes";
import {AppDispatch} from "@/store/store";
import {Button} from "rsuite";
import {setFirstDataId} from "@/store/dataSendSlice/dataToSend.slice";
import {fetchGetAnswers} from "@/store/answersSlice/answers.actions";

export const FirstSunBurst = () => {
  const dispatch = useDispatch<AppDispatch>();
  const sunData = useSelector(selectFirstSunData);
  const chartRef = useRef(null);
  const key = useSelector(selectFirstDataKey);
  const backData = useSelector(selectFirstBackData);
  const [currentData, setCurrentData] = useState<SunItems | []>();

  const handleBack = () => {
    if (backData === null) {
      console.log('backData', backData);
      dispatch(fetchGetDefaultSunBurst())
    } else {
      dispatch(fetchGetSunBurstBack(backData))
      dispatch(fetchGetBackData(backData))
    }
  }


  useEffect(() => {
    dispatch(fetchGetDefaultSunBurst())
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

  const onChartClick = (params: any) => {
    dispatch(setCurrentValue(params.data.name));
    dispatch(setFirstBackData(params.data.name));
    dispatch(fetchGetNextSunBurst(params.data.name))
    if (params.data.is_last_block) {
      dispatch(setFirstScaleType(params.data.scale_type))
      dispatch(setFirstCategoryId(+params.data.id))
      dispatch(setFirstDataId(+params.data.id))
      dispatch(fetchGetAnswers(+params.data.id))
    }
  };

  const onEvents = {
    click: onChartClick
  };


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
        onClick={handleBack}
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
        onEvents={onEvents}
      />
    </div>
  );
};