import styles from './styles.module.scss';
import dynamic from 'next/dynamic';
import {Loader} from "@/components/loader/Loader";

const WidgetTable = dynamic(() => import('@/components/baseStatistic/widgets/nationalityWidget/widgetTable/WidgetTable').then(mod => mod.WidgetTable), {
  loading: () => <Loader/>,
  ssr: false,
});

export const LanguageWidget = () => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Этнографическое распределение участников</span>
      <WidgetTable/>
    </div>
  );
};