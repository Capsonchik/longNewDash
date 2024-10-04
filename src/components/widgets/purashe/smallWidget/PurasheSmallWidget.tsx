import styles from './styles.module.scss'
import {FaCaretDown, FaCaretUp} from "react-icons/fa";
import {Text} from "rsuite";
import {PiAmbulance, PiUsersFour} from "react-icons/pi";
import {MdOutlineWorkOutline} from "react-icons/md";
import {TiWorldOutline} from "react-icons/ti";


type Props = {
  key: number
  card: {
    id: number
    title: string
    description: string
    index: string
    value: number
    color: string
    iconName: string
    mainColor: string
  }
}

export const PurasheSmallWidget = ({card}: Props) => {

  const iconSwitcher = () => {
    switch (card.iconName) {
      case 'Демография' :
        return <PiUsersFour color={`${card.mainColor === 'green' ? 'green' : 'red'}`} size={32}/>;
      case 'Занятость' :
        return <MdOutlineWorkOutline color={`${card.mainColor === 'green' ? 'green' : 'red'}`} size={32}/>;
      case 'Здоровье' :
        return <PiAmbulance color={`${card.mainColor === 'green' ? 'green' : 'red'}`} size={32}/>;
      case 'Мировоззрение' :
        return <TiWorldOutline color={`${card.mainColor === 'green' ? 'green' : 'red'}`} size={32}/>;
      default:
        return 'test'
    }
  }


  return (
    <div className={styles.container} style={{backgroundColor: card.color}}>
      <div className={styles.title}>
        <div className={styles.iconBlock}>
          {iconSwitcher()}
        </div>
        <Text style={{marginLeft: 8}} weight={"semibold"}>{card.title}</Text>
      </div>
      <div className={styles.stat}>
        {card.index === 'up' ? <FaCaretUp color={'green'} size={20}/> : <FaCaretDown color={'red'} size={20}/>}
        <span style={{
          marginLeft: 8,
          fontWeight: 'semibold',
          color: `${card.index === 'up' ? 'green' : 'red'}`
        }}>{card.value} п.п</span>
      </div>
      <Text size={'md'}>{card.description}</Text>
    </div>
  );
};