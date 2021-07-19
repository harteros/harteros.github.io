import styles from "./button.module.css"
export default function Button({children,to}){
    return(
        <a href={to} target={"_blank"} rel="noreferrer" className={styles.centered}>
            <div className={styles.button}>
                {children}
            </div>
        </a>

    )
}