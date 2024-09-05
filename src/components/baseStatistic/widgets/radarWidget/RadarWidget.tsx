import styles from './styles.module.scss';
import {RadarWidgetChart} from "@/components/charts/RadarWidgetChart";

export const RadarWidget = () => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Половозрастное распределение участников</span>
      <RadarWidgetChart/>
    </div>
  );
};