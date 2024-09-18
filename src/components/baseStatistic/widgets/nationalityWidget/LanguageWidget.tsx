import styles from './styles.module.scss';
import {WidgetTable} from "@/components/baseStatistic/widgets/nationalityWidget/widgetTable/WidgetTable";

type Props = {};
export const LanguageWidget = (props: Props) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Этнографическое распределение участников</span>
      <WidgetTable/>
    </div>
  );
};