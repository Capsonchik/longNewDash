import styles from './styles.module.scss';
import {Map} from "@/components/map/Map";

export const MapWidget = () => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Объем покупок в категории</span>
      <Map/>
    </div>
  );
};