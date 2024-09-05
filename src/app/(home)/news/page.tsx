import styles from './styles.module.scss';
import {NewsList} from "@/components/newsList/NewsList";

type Props = {};

export default function News(props: Props) {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Свежие новости</span>
      <NewsList/>
    </div>
  );
};
