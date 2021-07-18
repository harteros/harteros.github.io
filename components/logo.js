import styles from "./logo.module.css";

export default function Logo(){
    return(
        <div className={styles.logo}>
            <div className={styles.logo__inner}>
                <p className={styles.logo__text}>harteros</p>
            </div>
        </div>
    )
}