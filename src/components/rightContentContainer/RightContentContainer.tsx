'use client'

import styles from './styles.module.scss'
import {useSelector} from "react-redux";
import {selectIsMinMenu} from "@/store/store.selectors";
import {HeaderTitle} from "@/components/header/headerTitle/HeaderTitle";
import {ReactNode} from "react";


export const RightContentContainer = ({children,}: Readonly<{ children: ReactNode; }>) => {
  const isMinMenu = useSelector(selectIsMinMenu)

  return (
    <div className={`${isMinMenu ? styles.rightContent : styles.rightContentMax}`}>
      <HeaderTitle/>
      {children}
    </div>
  );
};