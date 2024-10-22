import styles from './styles.module.scss'

export default function TestPageLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}