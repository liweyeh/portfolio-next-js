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
                <h1>This is style testing</h1>
            </main>
            <footer className={styles.footer}></footer>
        </div>
    );
}
