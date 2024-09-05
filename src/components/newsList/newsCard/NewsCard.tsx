import styles from './styles.module.scss';
import Image from "next/image";

export const NewsCard = (card: any) => {

  console.log("NewsCard", card);

  const renderImage = () => {
    if (card.item.image_url) {
      return <Image src={card.item.image_url} alt={'image'} width={100} height={100}/>
    } else return <span>Изображение отсутствует</span>
  }

  return (
    <div className={styles.card}>
      {card.item.image_url
        ? <Image src={card.item.image_url} alt={'image'} width={100} height={100}/>
        : <span>test</span>
      }

      <span>{card.item.title}</span>

      <span>{card.item.description}</span>
    </div>
  );
};