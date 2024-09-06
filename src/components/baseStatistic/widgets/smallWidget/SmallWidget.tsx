import styles from './styles.module.scss';
import {FiClipboard, FiFilm, FiShoppingCart, FiUsers, FiWifiOff} from "react-icons/fi";
import {SmallWidgetType} from "@/types/widgetTypes";


export const SmallWidget = (props: SmallWidgetType) => {

  const iconSwitcher = (titleName: string) => {
    switch (titleName) {
      case "Количество участников системы":
        return <FiUsers style={{color: "white"}}/>;
      case "Внесенные SKU":
        return <FiShoppingCart style={{color: "white"}}/>;
      case "Количество ответов":
        return <FiClipboard style={{color: "white"}}/>;
      case "Объем медиа данных":
        return <FiFilm style={{color: "white"}}/>;
      default:
        return <FiWifiOff style={{color: "white"}}/>
    }
  }


  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.title}>{props.name}</span>
          <div className={styles.circle}>
            {iconSwitcher(props.name)}
          </div>
        </div>
        <span className={styles.value}>{props.value}</span>
        <span className={styles.stat}>
          На&nbsp;
          <span
            className={`${props.status === 'danger' ? styles.statValue : styles.statGreen}`}>{props.statistic} </span>
          {props.status === 'danger' ? 'меньше' : 'больше'}&nbsp;
          чем вчера
          {/*{props.description}*/}
        </span>
      </div>
    </div>
  );
};