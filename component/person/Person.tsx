// Lib
import React, { useContext } from "react";
// Scripts
import scriptIndex from "../../public/scripts/scriptIndex";
// CSS
import styles from "../../styles/components/Skill.module.css";
import utilStyles from "../../styles/util/Util.module.css";
// Context
import { LanguageContext } from "../../context/LanguageContext";

const Skill = () => {
    const { language } = useContext(LanguageContext);
    const script = scriptIndex[language];

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div className={styles.characterContainer}></div>
                <div className={styles.skillContainer}>
                    <div className={styles.skillBox}>
                        <h1 className={`${styles.title} ${utilStyles.h2}`}>
                            {script.skillTitle}
                        </h1>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Skill;
