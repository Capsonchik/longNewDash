import styles from './styles.module.scss';
import type { Metadata } from "next";
import {Inter, Jost} from "next/font/google";
import "./globals.css";
import 'rsuite/dist/rsuite-no-reset.min.css';
import {Header} from "@/components/header/Header";
import {SideBar} from "@/components/sideBar/SideBar";

const inter = Inter({ subsets: ["latin"] });
const jost = Jost({subsets: ['latin']})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${jost.className} ${styles.main}`}>
        <Header/>
        <div className={styles.content}>
          <SideBar/>
          <div className={styles.rightContent}>
            <div>
              <h1 className={styles.header}>Обзор Аналитики</h1>
              <span className={styles.headerDescription}>За последние 30 дней ваш показатель отказов увеличился на 5,25 %.</span>
            </div>
            {children}
          </div>
        </div>

      </body>
    </html>
  );
}