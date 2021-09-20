// Lib
import React, { useContext } from "react";
// Scripts
import scriptIndex from "../../public/scripts/scriptIndex";

// CSS
import styles from "../../styles/components/Introduction.module.css";
import utilStyles from "../../styles/util/Util.module.css";
// Component
import IntroButton from "./IntroButton";
// Context
import { LanguageContext } from "../../context/LanguageContext";

const Introduction = () => {
    const { language } = useContext(LanguageContext);
    const script = scriptIndex[language];

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div className={styles.menu}>
                    <h1 className={`${styles.intro} ${utilStyles.h1}`}>
                        {script.hi}
                    </h1>
                    <div className={styles.btngroup}>
                        <IntroButton title={"Skip to contact section"} />
                    </div>
                </div>
                <div className={styles.character}>
                    <div className={styles.circle}></div>
                </div>
            </main>
        </div>
    );
};

export default Introduction;
