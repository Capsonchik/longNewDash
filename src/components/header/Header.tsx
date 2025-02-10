import styles from './styles.module.scss';
import {FiAlignJustify, FiBell, FiInbox, FiSettings} from "react-icons/fi";

import * as React from 'react';
import {Badge, Input} from "rsuite";
import Link from "next/link";

type Props = {};
export const Header = (props: Props) => {
  return (
    <div className={styles.header}>
      <div className={styles.leftBlock}>
        <img style={{width: 100, height: 30}} src="/romir_logo_white_all.svg" alt="log"/>
        <FiAlignJustify className={styles.menuIcon}/>
        <Input className={styles.input} placeholder="Поиск по сервису..."/>
      </div>
      <div className={styles.rightIcons}>
        <FiInbox className={styles.icon}/>
        <Badge color={'blue'}>
          <FiBell className={styles.icon}/>
        </Badge>
        <FiSettings className={styles.icon}/>
      </div>
      <Link href={'/long/new-purchase-page'} prefetch={true}></Link>
    </div>
  );
};