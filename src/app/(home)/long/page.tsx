import styles from './styles.module.scss';
import {FirstSunBurst} from "@/components/charts/firstSunBurst";
import {SecondSunBurst} from "@/components/charts/secondSunBurst";
import {LongBtn} from "@/components/longBtn/LongBtn";

type Props = {
  client_id: number
  report_id: number
};

export default async function Page({searchParams}: { searchParams: Props }) {

  // Убрал для фикса сборки
  // const sunData = await fetch('https://f731-212-45-6-6.ngrok-free.app/v1/visualizations/sunburst_tree/')
  // const currentData = await sunData.json();

  // const nextSunData = await fetch(`https://f731-212-45-6-6.ngrok-free.app/v1/visualizations/sunburst_tree/?element_name=${searchParams}`)
  // const currentNextSunData = await nextSunData.json();


  return (
    <div className={styles.container}>
      <div className={styles.bursts}>
        <FirstSunBurst/>
        <SecondSunBurst/>
      </div>
      <div className={styles.btnBlock}>
        <LongBtn/>
      </div>

    </div>
  );
};
