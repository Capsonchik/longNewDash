import styles from './styles.module.scss';

type Props = {};
export const LanguageWidget = (props: Props) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Популярные языки</span>
    </div>
  );
};