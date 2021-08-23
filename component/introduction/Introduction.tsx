import styles from "../../styles/components/Introduction.module.css";
import utilStyles from "../styles/util/Util.module.css";

export default function Introduction() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.intro}>
                    Welcome to Liwei Yeh’s portfolio. I am doge, the guide of
                    this place
                </h1>
                <div className={styles.character}>
                    <div className={styles.circle}></div>
                </div>
            </main>
        </div>
    );
}
