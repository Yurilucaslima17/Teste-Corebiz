import styles from "./page.module.css";
import MainBanner from "./components/MainBanner";
import Shelf from "./components/Shelf";
import Newsletter from "./components/Newsletter";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <MainBanner />
        <Shelf />
        <Newsletter />
      </main>
    </div>
  );
}
