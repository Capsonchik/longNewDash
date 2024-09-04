import styles from './styles.module.scss';
import {Map} from "@/components/map/Map";

export const MapWidget = () => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Статистика на карте</span>
      <Map/>
    </div>
  );
};