// Lib
import React, { useContext } from "react";
import Image from "next/image";

// Assest
import me from "../../public/images/photo_me.jpg";
// Scripts
import scriptIndex from "../../public/scripts/scriptIndex";
// CSS
import styles from "../../styles/components/Person.module.css";
import utilStyles from "../../styles/util/Util.module.css";
// Context
import { LanguageContext } from "../../context/LanguageContext";

const Skill = () => {
    const { language } = useContext(LanguageContext);
    const script = scriptIndex[language].person;

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div className={styles.intro}>
                    <div className={styles.left}>
                        <h1 className={styles.title}>{script.title}</h1>
                        <div className={styles.photo}>
                            <Image
                                src={me}
                                alt={script.photo_alt}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                    <p className={styles.content}>{script.content}</p>
                </div>
            </main>
        </div>
    );
};

export default Skill;
