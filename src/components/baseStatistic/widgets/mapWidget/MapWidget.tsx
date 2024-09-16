'use client'

import styles from './styles.module.scss';
import {Map} from "@/components/map/Map";
import {useRouter} from "next/navigation";
import {useDispatch} from "react-redux";
import {AppDispatch} from "@/store/store";
import {setActiveKey} from "@/store/store.slice";


export const MapWidget = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const handleNavigate = () => {
    dispatch(setActiveKey('3'))
    router.push('/long/purchase');
  }


  return (
    <div className={styles.container}>
      <span onClick={handleNavigate} className={styles.title}>Объем покупок в категории</span>
      <Map/>
    </div>
  );
};