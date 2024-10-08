'use client'

import styles from './styles.module.scss'
import {useSelector} from "react-redux";
import {selectIsMinMenu} from "@/store/store.selectors";
import {HeaderTitle} from "@/components/header/headerTitle/HeaderTitle";


export const RightContentContainer = ({children}: any) => {
  const isMinMenu = useSelector(selectIsMinMenu)

  return (
    <div className={`${isMinMenu ? styles.rightContent : styles.rightContentMax}`}>
      <HeaderTitle/>
      {children}
    </div>
  );
};