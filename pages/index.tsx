// Next Component
import Head from "next/head";
// Styles
import styles from "../styles/pages/Portfolio.module.css";
import utilStyles from "../styles/util/Util.module.css";
// Component
import Introduction from "../component/introduction/Introduction";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Liwei Yeh&apos;s Portfolio</title>
                <meta name="description" content="Liwei Yeh's portfolio" />
                <link rel="icon" href="/icons/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <Introduction />
                <Introduction />
            </main>
        </div>
    );
}
