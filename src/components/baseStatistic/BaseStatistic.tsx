import styles from './styles.module.scss';
import {SmallWidget} from "@/components/baseStatistic/widgets/smallWidget/SmallWidget";
import {MapWidget} from "@/components/baseStatistic/widgets/mapWidget/MapWidget";
import {LanguageWidget} from "@/components/baseStatistic/widgets/languageWidget/LanguageWidget";
import {RadarWidget} from "@/components/baseStatistic/widgets/radarWidget/RadarWidget";
import {MobileWidget} from "@/components/baseStatistic/widgets/mobileWidget/MobileWidget";
import {TrafficWidget} from "@/components/baseStatistic/widgets/trafficWidget/TrafficWidget";
import {BrowserWidget} from "@/components/baseStatistic/widgets/browserWidget/BrowserWidget";

export const BaseStatistic = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <div className={styles.widgets}>
          <SmallWidget
            name={'Количество участников системы'}
            value={'1200 чел'}
            statistic={'-2.65%'}
            status={"danger"}
            description={'Количество посетителей'}
          />
          <SmallWidget
            name={'Внесенные SKU'}
            value={'13900'}
            statistic={'8.35%'}
            status={"success"}
            description={'Больше посетителей чем обычно'}
          />
          <SmallWidget
            name={'Количество ответов'}
            value={'255'}
            statistic={'5.50%'}
            status={"success"}
            description={'Активность выше чем обычно'}
          />
          <SmallWidget
            name={'Объем медиа данных'}
            value={'49GB'}
            statistic={'-4.25%'}
            status={"danger"}
            description={'Активность ниже чем обычно'}
          />
        </div>
        <div className={styles.map}>
          <MapWidget/>
        </div>
      </div>
      <div className={styles.middleContainer}>
        <div className={styles.block}>
          <LanguageWidget/>
        </div>
        <div className={styles.block}>
          <RadarWidget/>
        </div>
        <div className={styles.block}>
          <MobileWidget/>
        </div>
      </div>
      <div className={styles.botContainer}>
        <div className={styles.traffic}>
          <TrafficWidget/>
        </div>
        <div className={styles.browser}>
          <BrowserWidget/>
        </div>
      </div>
    </div>
  );
};