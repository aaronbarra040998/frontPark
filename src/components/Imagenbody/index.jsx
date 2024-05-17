import styles from "./Hero.module.css";
import body from "../../assets/body.svg";

export default function Imagenbody() {
    return (
<>
            <img src={body} alt="Hero image of me" className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
            </>
    );
}
