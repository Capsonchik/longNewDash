import styles from './styles.module.scss';
import {NewsCard} from "@/components/newsList/newsCard/NewsCard";

export async function NewsList() {

  const news = await fetch('https://newsdata.io/api/1/latest?country=ru&apikey=pub_52032b3ad75b280b402ad6e014c266d77bd35')
  const allNews = await news.json()

  console.log(allNews)

  return (
    <div className={styles.cardList}>
      {allNews.results.map((item: any) => <NewsCard key={item.article_id} item={item}/>)}
    </div>
  )
}