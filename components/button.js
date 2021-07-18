import styles from "./button.module.css"
export default function Button({children,to}){
    return(
        <a href={to} target={"_blank"} rel="noreferrer">
            <div className={styles.button}>
                {children}
            </div>
        </a>

    )
}