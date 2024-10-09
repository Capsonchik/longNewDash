import styles from './styles.module.scss';
import dynamic from "next/dynamic";
import {Loader} from "@/components/loader/Loader";

const RadarWidgetComponent = dynamic(() => import('@/components/charts/RadarWidgetChart').then(mod => mod.RadarWidgetChart), {
  loading: () => <Loader/>,
  ssr: false,
})

export const RadarWidget = () => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Половозрастное распределение участников</span>
      {/*<RadarWidgetChart/>*/}
      <RadarWidgetComponent/>
    </div>
  );
};