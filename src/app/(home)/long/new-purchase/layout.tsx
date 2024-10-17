import styles from './styles.module.scss'
import {Heading} from "rsuite";
import {NavBar} from "@/components/newPurchaseComponents/nav/NavBar";

export default function NewPurchaseLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <div className={styles.container}>
      <Heading className={styles.title} level={3}>Аналитическая панель</Heading>
      <NavBar/>
      {children}
    </div>
  );
}