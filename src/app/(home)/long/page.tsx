import styles from './styles.module.scss';
import {FirstSunBurst} from "@/components/charts/firstSunBurst";

type Props = {};
export default async function Page(props: Props) {


  return (
    <div className={styles.container}>
      Лонгитюд
      <div className={styles.bursts}>
        <FirstSunBurst/>
        <FirstSunBurst/>
      </div>
    </div>
  );
};
