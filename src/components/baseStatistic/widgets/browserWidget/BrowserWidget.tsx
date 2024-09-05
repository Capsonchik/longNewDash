import styles from './styles.module.scss';
import {BrowserPieChart} from "@/components/charts/BrowserPieChart";

type Props = {};

export const BrowserWidget = (props: Props) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Популярность браузеров</span>
      <BrowserPieChart/>
    </div>
  );
};