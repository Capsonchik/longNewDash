import styles from './styles.module.scss';
import {SmallWidget} from "@/components/baseStatistic/widgets/smallWidget/SmallWidget";
import {MapWidget} from "@/components/baseStatistic/widgets/mapWidget/MapWidget";

export const BaseStatistic = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <div className={styles.widgets}>
          <SmallWidget/>
          <SmallWidget/>
          <SmallWidget/>
          <SmallWidget/>
        </div>
        <div className={styles.map}>
          <MapWidget/>
        </div>
      </div>
    </div>
  );
};