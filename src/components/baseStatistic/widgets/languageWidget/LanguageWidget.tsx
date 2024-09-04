import styles from './styles.module.scss';
import {WidgetTable} from "@/components/baseStatistic/widgets/languageWidget/widgetTable/WidgetTable";

type Props = {};
export const LanguageWidget = (props: Props) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Популярные языки</span>
      <WidgetTable/>
    </div>
  );
};