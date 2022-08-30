import styles from "./Card.module.css"

export default function Card({children, to}) {
    return (
        <a href={to} target={"_blank"} rel="noreferrer" className={styles.card}>
            <div>
                {children}
            </div>
        </a>

    )
}

export function Header({children}) {
    return (
        <h6>{children}</h6>
    )
}

export function Body({children}) {
    return (
        <p>{children}</p>
    )
}

export function Credentials({children}) {
    return (
        <div className={styles.card__credentials}>
            {children}
        </div>
    )
}

export function Block({children, language}) {
    return (
        <p className={language ? styles.card__block + ` ${language}` :  styles.card__block}>{children}</p>
    )
}

Card.Header = Header;
Card.Body = Body;
Card.Credentials = Credentials;
Card.Block = Block;
