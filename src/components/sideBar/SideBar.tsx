'use client'

import styles from './styles.module.scss';
import {Nav, Sidenav} from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import {useRouter} from "next/navigation";
import {useState} from "react";

export const SideBar = () => {
  const router = useRouter();

  const [activeKey, setActiveKey] = useState('1')


  const handleNavigate = (route: string, key: string) => {
    router.push(route)
    setActiveKey(key)
  }

  return (
    <div className={styles.sideNavContainer}>
      <Sidenav appearance={'subtle'} defaultOpenKeys={['3', '4', '5']}>
        <Sidenav.Body className={styles.sideBody}>
          <Nav activeKey={activeKey}>
            <Nav.Item onClick={() => handleNavigate('/', '1')} className={styles.sideItem} eventKey="1"
                      icon={<DashboardIcon/>}>
              Дашборд
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<GroupIcon/>}>
              Группы пользователей
            </Nav.Item>
            <Nav.Menu eventKey="4" title="Аналитика" icon={<MagicIcon/>}>
              <Nav.Item onClick={() => handleNavigate('/long', '4-1')} eventKey="4-1">Лонгитюдный круг</Nav.Item>
              <Nav.Item eventKey="4-2">Пространство и время</Nav.Item>
              <Nav.Item onClick={() => handleNavigate('/news', '4-3')} eventKey="4-3">Инфо - поле</Nav.Item>
              <Nav.Item eventKey="4-4">Внешние факторы</Nav.Item>
              <Nav.Item eventKey="3-4">Результат</Nav.Item>
            </Nav.Menu>
            <Nav.Menu eventKey="5" title="Настройки" icon={<GearCircleIcon/>}>
              <Nav.Item eventKey="5-1">Профиль</Nav.Item>
              <Nav.Item eventKey="5-2">Админ панель</Nav.Item>
            </Nav.Menu>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};