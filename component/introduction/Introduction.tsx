// CSS
import styles from "../../styles/components/Introduction.module.css";
import utilStyles from "../../styles/util/Util.module.css";

// Component
import IntroButton from "./IntroButton";

export default function Introduction() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div className={styles.menu}>
                    <h1 className={`${styles.intro} ${utilStyles.h1}`}>
                        Welcome to Liwei Yeh’s portfolio. I am doge, the guide
                        of this place
                    </h1>
                    <div className={styles.btngroup}>
                        <IntroButton />
                    </div>
                </div>
                <div className={styles.character}>
                    <div className={styles.circle}></div>
                </div>
            </main>
        </div>
    );
}
