import styles from './styles.module.scss';
import "./globals.css";
import 'rsuite/dist/rsuite-no-reset.min.css';
import {Header} from "@/components/header/Header";
import {SideBar} from "@/components/sideBar/SideBar";
import ReduxProvider from "@/reduxProvider/ReduxProvider";
import {HeaderTitle} from "@/components/header/headerTitle/HeaderTitle";

// const jost = Jost({subsets: ['latin']})

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {

  return (

    <html lang="en">
    <body className={`${styles.main}`}>
    <ReduxProvider>
      <Header/>
      <div className={styles.content}>
        <SideBar/>
        <div className={styles.rightContent}>
          <HeaderTitle/>
          {children}
        </div>
      </div>
    </ReduxProvider>
    </body>
    </html>

  );
}
