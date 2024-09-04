import styles from './styles.module.scss';

type Props = {};

export const BrowserWidget = (props: Props) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Популярность браузеров</span>

    </div>
  );
};