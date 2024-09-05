'use client'

import styles from './styles.module.scss';
import {Nav, Sidenav} from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import {useRouter} from "next/navigation";

type Props = {};

export const SideBar = (props: Props) => {
  const router = useRouter();

  const handleNavigate = (route: string) => {
    router.push(route)
  }

  return (
    <div className={styles.sideNavContainer}>
      <Sidenav appearance={'subtle'} defaultOpenKeys={['3', '4']}>
        <Sidenav.Body className={styles.sideBody}>
          <Nav activeKey="1">
            <Nav.Item onClick={() => handleNavigate('/')} className={styles.sideItem} eventKey="1"
                      icon={<DashboardIcon/>}>
              Дашборд
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<GroupIcon/>}>
              Группы пользователей
            </Nav.Item>
            {/*<Nav.Item onClick={() => handleNavigate('/news')} eventKey="3" icon={<SpeakerIcon/>}>*/}
            {/*  Свежие новости*/}
            {/*</Nav.Item>*/}
            <Nav.Menu eventKey="4" title="Лонгитюдный круг" icon={<MagicIcon/>}>
              <Nav.Item eventKey="4-1">Пространство и время</Nav.Item>
              <Nav.Item eventKey="4-2">Инфо - поле</Nav.Item>
              <Nav.Item eventKey="4-3">Внешние факторы</Nav.Item>
              <Nav.Item onClick={() => handleNavigate('/long')} eventKey="3-4">Аналитика</Nav.Item>
            </Nav.Menu>
            <Nav.Menu eventKey="5" title="Settings" icon={<GearCircleIcon/>}>
              <Nav.Item eventKey="5-1">Applications</Nav.Item>
              <Nav.Item eventKey="5-2">Channels</Nav.Item>
              <Nav.Item eventKey="5-3">Versions</Nav.Item>
              <Nav.Menu eventKey="5-5" title="Custom Action">
                <Nav.Item eventKey="5-5-1">Action Name</Nav.Item>
                <Nav.Item eventKey="5-5-2">Action Params</Nav.Item>
              </Nav.Menu>
            </Nav.Menu>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};