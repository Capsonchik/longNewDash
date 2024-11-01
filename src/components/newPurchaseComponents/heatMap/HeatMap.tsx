'use client'

import styles from './styles.module.scss';
import {useSelector} from "react-redux";
import {selectIsBottomOn, selectNewDoubleCircleAnswers} from "@/store/newLongCircleSlice/newCircle.selectors";
import {DoubleCircleDataType} from "@/types/doubleCircleTypes";
import {Panel, SelectPicker} from "rsuite";
import {MapWhite} from "@/components/mapWhite/MapWhite";
import {MockLineChart} from "@/components/charts/mockChart/mockLineChart";

export const HeatMap = () => {
  const currentParam = useSelector(selectNewDoubleCircleAnswers) as DoubleCircleDataType | undefined;
  const isBottomOn = useSelector(selectIsBottomOn);


  const pickerData = currentParam?.data && currentParam?.data.map(item => (
    {label: item.label, value: item.label}
  )) || [];

  const lineData = currentParam?.data && currentParam?.data.flatMap(item => item.label) || [];

  return (
    <>
      {isBottomOn ? (
        <Panel bordered>
          <SelectPicker data={pickerData} placeholder={'Параметр'} className={styles.picker}/>
          <div className={styles.infoBlock}>
            <div className={styles.infoItem}>
              <MapWhite currentValue={''}/>
            </div>
            <div className={styles.infoItem}>
              <MockLineChart indexes={lineData}/>
            </div>
          </div>
        </Panel>
      ) : null
      }
    </>

  );
};