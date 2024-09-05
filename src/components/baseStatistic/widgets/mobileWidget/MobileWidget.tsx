import styles from './styles.module.scss';
import {MobileBarChart} from "@/components/charts/MobileBarChart";

export const MobileWidget = () => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Пользователи моб./Пользователи ПК</span>
      <MobileBarChart/>
    </div>
  );
};