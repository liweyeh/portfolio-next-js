import Head from "next/head";
import styles from "../styles/pages/Portfolio.module.css";
import utilStyles from "../styles/util/Util.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Liwei Yeh&apos;s Portfolio</title>
                <meta name="description" content="Liwei Yeh's portfolio" />
                <link rel="icon" href="/icons/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1 className={utilStyles.h1}>Title/Header 1</h1>
                <h2 className={utilStyles.h2}>Title/Header 1</h2>
                <h3 className={utilStyles.h3}>Title/Header 1</h3>
                <p className={utilStyles.subtitle}>Title/Header 1</p>
                <p className={utilStyles.body}>Title/Header 1</p>
            </main>
            <footer className={styles.footer}></footer>
        </div>
    );
}
