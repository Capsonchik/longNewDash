'use client'

import ReactECharts from "echarts-for-react";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentValue} from "@/store/firstSunBurstSlice/firstSunBurst.slice";
import {selectFirstSunData} from "@/store/firstSunBurstSlice/firstSunBurst.selectors";
import {fetchGetDefaultSunBurst, fetchGetNextSunBurst} from "@/store/firstSunBurstSlice/firstSunBirst.actions";
import {useEffect} from "react";

type Props = {};

export const FirstSunBurst = (props: Props) => {
  const dispatch = useDispatch();
  const sunData = useSelector(selectFirstSunData);

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchGetDefaultSunBurst())

  }, [dispatch]);

  const onChartClick = (params: any) => {
    dispatch(setCurrentValue(params.data.name));
    // @ts-ignore
    dispatch(fetchGetNextSunBurst(params.data.name))
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
      data: sunData,
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
      <ReactECharts
        option={option}
        style={{height: '375px', width: 400}}
        opts={{renderer: 'svg'}}
        onEvents={onEvents}
      />
    </div>
  );
};