import styles from "./page.module.css";
import MainBanner from "./components/MainBanner";
import Shelf from "./components/Shelf";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* <div style={{width: 500}}> */}
        <MainBanner />
        <Shelf />
        {/* </div> */}
      </main>
    </div>
  );
}
