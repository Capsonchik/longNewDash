import styles from './styles.module.scss';

type Props = {};

export const TrafficWidget = (props: Props) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Траффик</span>
    </div>
  );
};