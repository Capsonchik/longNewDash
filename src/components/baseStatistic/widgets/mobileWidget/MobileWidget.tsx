import styles from './styles.module.scss';
import dynamic from "next/dynamic";
import {Loader} from "@/components/loader/Loader";

const MobileWidgetComponent = dynamic(() => import('@/components/charts/MobileBarChart').then(mod => mod.MobileBarChart), {
  loading: () => <Loader/>,
  ssr: false,
})

export const MobileWidget = () => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Пользователи моб./Пользователи ПК</span>
      <MobileWidgetComponent/>
      {/*<MobileBarChart/>*/}
    </div>
  );
};