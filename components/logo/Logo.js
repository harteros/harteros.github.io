import styles from "./Logo.module.css";

export default function Logo() {
    return (
        <a href={""}>
            <div className={styles.logo}>
                <div className={styles.logo__inner}>
                    <p className={styles.logo__text}>harteros</p>
                </div>
            </div>
        </a>
    )
}