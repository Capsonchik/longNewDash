'use client'

import styles from './styles.module.scss';
import {Map} from "@/components/map/Map";
import {useRouter} from "next/navigation";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "@/store/store";
import {setActiveKey, setCurrentRegion} from "@/store/store.slice";
import {useEffect} from "react";
import {selectCurrentPickValue} from "@/store/store.selectors";


export const MapWidget = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const currentPickValue = useSelector(selectCurrentPickValue);

  const handleNavigate = () => {
    dispatch(setActiveKey('3'))
    router.push('/long/purchase');
  }

  // const [currentPickValue, setCurrentPickValue] = useState<string | null>(null)

  console.log('currentPickValue', currentPickValue)

  useEffect(() => {
    if (currentPickValue !== null) {
      dispatch(setCurrentRegion(currentPickValue))
      router.push('/long/purchase');
    }
  }, [currentPickValue])

  return (
    <div className={styles.container}>
      <span onClick={handleNavigate} className={styles.title}>Объем покупок в категории</span>
      <Map/>
    </div>
  );
};