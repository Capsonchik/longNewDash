'use client'

import styles from './styles.module.scss';
import {useSelector} from "react-redux";
import {selectMainDescription, selectMainTitle} from "@/store/store.selectors";

export const HeaderTitle = () => {
  const title = useSelector(selectMainTitle);
  const description = useSelector(selectMainDescription);

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>{title ? title : ''}</h1>
      <span className={styles.headerDescription}>{description ? description : ''}</span>
    </div>
  );
};