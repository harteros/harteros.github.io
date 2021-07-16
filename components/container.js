import React from "react"
import styles from "../styles/components/container.module.css"

export default function Container({children}) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}