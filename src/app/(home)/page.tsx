import styles from './styles.module.scss'
import {BaseStatistic} from "@/components/baseStatistic/BaseStatistic";

export default function Home() {
  return (
    <main className={styles.main}>
      <BaseStatistic/>
    </main>
  );
}
