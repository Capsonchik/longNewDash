import styles from './styles.module.scss';
import {TrafficTable} from "@/components/baseStatistic/widgets/trafficWidget/trafficTable/TrafficTable";

type Props = {};

export const TrafficWidget = (props: Props) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Траффик</span>
      <TrafficTable/>
    </div>
  );
};