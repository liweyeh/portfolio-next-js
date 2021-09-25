// Lib
import React from "react";
// CSS
import styles from "../../styles/components/Introduction.module.css";
import utilStyles from "../../styles/util/Util.module.css";

// interface
interface IntroProps {
    title?: string;
}

const IntroButton: React.FC<IntroProps> = ({ title = "default" }) => {
    return (
        <button className={`${styles.btn} ${utilStyles.h3}`}>{title}</button>
    );
};

export default IntroButton;
