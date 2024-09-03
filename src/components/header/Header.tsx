import styles from './styles.module.scss';
import { FiAlignJustify, FiInbox, FiBell, FiSettings} from "react-icons/fi";

import * as React from 'react';
import {Input} from "rsuite";

type Props = {

};
export const Header = (props: Props) => {
  return (
    <div className={styles.header}>
      <div className={styles.leftBlock}>
        <span className={styles.logo}>РОМИР</span>
        <FiAlignJustify className={styles.menuIcon}/>
        <Input className={styles.input} placeholder="Поиск по сервису..." />
      </div>
      <div className={styles.rightIcons}>
        <FiInbox className={styles.icon}/>
        <FiBell className={styles.icon}/>
        <FiSettings className={styles.icon}/>
      </div>
    </div>
  );
};