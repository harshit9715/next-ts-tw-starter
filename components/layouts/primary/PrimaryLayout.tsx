import Head from 'next/head';
import styles from './PrimaryLayout.module.css';

export interface IPrimaryLayout {
  children: React.ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Primary Layout Example</title>
        <main className={styles.main}>{children}</main>
      </Head>
    </>
  );
};

export default PrimaryLayout;
