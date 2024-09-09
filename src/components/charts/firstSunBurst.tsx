'use client'

import {SUN_DATA_MINI} from "@/mocks/sunBurstData";
import ReactECharts from "echarts-for-react";

type Props = {};

export const FirstSunBurst = (props: Props) => {

  const option = {
    tooltip: {
      trigger: 'item',
      formatter: function (params: any) {
        return params.name;
      }
    },
    series: {
      type: 'sunburst',
      data: SUN_DATA_MINI,
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
      />
    </div>
  );
};