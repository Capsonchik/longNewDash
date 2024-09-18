import styles from './styles.module.scss'

type Props = {
  title: string
  percent: number | string
  date: string
  up: number
  upStatus: 'up' | 'down'
  down: number
  downStatus: 'up' | 'down'
  change: '%' | 'п.п'
};

export const SliderBlock = (props: Props) => {
  const {title, percent, date, up, down, upStatus, downStatus, change} = props;
  return (
    <div className={styles.container}>
      <span className={styles.title}>{title}</span>
      <div className={styles.firstBlock}>
        <span className={styles.firstBlockPercent}>{percent}</span>
        <span className={styles.firstBlockDate}>{date}</span>
      </div>
      <div className={styles.lastBlock}>
        <span style={{marginRight: 10, color: 'darkgray'}}>Изм., {change}</span>
        <span style={{color: `${upStatus === 'up' ? 'green' : 'red'}`, marginRight: 10}}>{up} {change}</span>
        <span style={{marginRight: 10, color: 'darkgray'}}>За год {change}</span>
        <span style={{color: `${downStatus === 'up' ? 'green' : 'red'}`}}>{down} {change}</span>
      </div>
    </div>
  );
};