import styles from './styles.module.scss';
import {MobileBarChart} from "@/components/charts/MobileBarChart";

export const MobileWidget = () => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Мобильные/ПК</span>
      <MobileBarChart/>
    </div>
  );
};