'use client'

import styles from './styles.module.scss';
import {Nav, Sidenav} from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';

import {useRouter} from "next/navigation";
import {useDispatch, useSelector} from "react-redux";
import {selectActiveKey} from "@/store/store.selectors";
import {setActiveKey} from "@/store/store.slice";
import FunnelTrendIcon from '@rsuite/icons/FunnelTrend';

export const SideBar = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const key = useSelector(selectActiveKey);


  const handleNavigate = (route: string, key: string, title: string) => {
    router.push(route)
    dispatch(setActiveKey(key))
  }

  return (
    <div className={styles.sideNavContainer}>
      <Sidenav appearance={'subtle'} defaultOpenKeys={['3', '4', '5']}>
        <Sidenav.Body className={styles.sideBody}>
          <Nav activeKey={key}>
            <Nav.Item
              onClick={() => handleNavigate('/', '1', 'Дашборд')}
              className={`${styles.sideItem} ${key === '1' ? styles.sideItemActive : styles.sideDisable}`}
              eventKey="1"
              icon={<DashboardIcon/>}
            >
              Дашборд
            </Nav.Item>
            <Nav.Item
              eventKey="2"
              icon={<GroupIcon/>}
              className={`${key === '2' ? styles.sideItemActive : styles.sideDisable}`}
            >
              Группы пользователей
            </Nav.Item>
            <Nav.Item
              eventKey="3"
              icon={<FunnelTrendIcon/>}
              onClick={() => handleNavigate('/long/purchase', '3', 'Объем покупок')}
              className={`${key === '3' ? styles.sideItemActive : styles.sideDisable}`}
            >
              Объем покупок
            </Nav.Item>
            <Nav.Menu
              eventKey="4"
              title="Аналитика"
              icon={<MagicIcon/>}
            >
              <Nav.Item
                onClick={() => handleNavigate('/long', '4-1', 'Лонгитюдный круг')}
                eventKey="4-1"
                className={`${key === '4-1' ? styles.sideItemActive : styles.sideDisable}`}
              >
                Лонгитюдный круг
              </Nav.Item>
              <Nav.Item eventKey="4-2">Пространство и время</Nav.Item>
              <Nav.Item
                onClick={() => handleNavigate('/news', '4-3', 'Инфо - поле')}
                eventKey="4-3"
                className={`${key === '4-3' ? styles.sideItemActive : styles.sideDisable}`}
              >
                Инфо - поле
              </Nav.Item>
              <Nav.Item eventKey="4-4">Внешние факторы</Nav.Item>
              <Nav.Item
                onClick={() => handleNavigate('/long/longresult', '4-5', 'Выбор результатов')}
                eventKey="4-5"
                className={`${key === '4-5' ? styles.sideItemActive : styles.sideDisable}`}
              >
                Результат
              </Nav.Item>
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