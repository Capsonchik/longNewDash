'use client'

import styles from './styles.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {selectMainDescription, selectMainTitle} from "@/store/store.selectors";
import {usePathname} from "next/navigation";
import {useEffect} from "react";
import {setMainTitle} from "@/store/store.slice";

export const HeaderTitle = () => {
  const dispatch = useDispatch();
  const title = useSelector(selectMainTitle);
  const description = useSelector(selectMainDescription);

  const path = usePathname();

  useEffect(() => {
    if (path) {
      switch (path) {
        case "/":
          dispatch(setMainTitle('Обзор Аналитики'))
          break;
        case "/long":
          dispatch(setMainTitle('Лонгитюдная система'))
          break;
        case "/news":
          dispatch(setMainTitle('Новости системы'))
          break;
        case "/long/purchase":
          dispatch(setMainTitle('Объем покупок'))
          break;
        default:
          // Handle other paths or do nothing
          break;
      }
    }
  }, [path]);


  return (
    <div className={styles.container}>
      <h1 className={styles.header}>{title ? title : ''}</h1>
      <span className={styles.headerDescription}>{description ? description : ''}</span>
    </div>
  );
};