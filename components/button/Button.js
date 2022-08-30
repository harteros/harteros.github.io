import styles from "./Button.module.css"

export default function Button({children, to}) {
    return (
        <a href={to} target={"_blank"} rel="noreferrer" className="center">
            <div className={styles.button + " center"}>
                {children}
            </div>
        </a>

    )
}
