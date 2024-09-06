import styles from './styles.module.scss';
import {Graph} from "@/components/newsList/newsCard/Graph";

export const NewsCard = (card: any) => {

  return (
    <div className={styles.card}>

      {card.item.image_url
        ? <img className={styles.image} src={card.item.image_url} alt="photo"/>
        : <Graph/>
      }

      <span className={styles.title}>{card.item.title}</span>

      <span className={styles.text}>{card.item.description}</span>

    </div>
  );
};