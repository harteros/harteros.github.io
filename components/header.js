import Link from "next/link";

import styles from "../styles/components/header.module.css"
import Container from "./container";
import {useState} from "react";

export default function Header() {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => {
        setClick(false)
    }
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.navbar}>
                    <div className={styles.navbar__logo}>
                        harteros
                    </div>
                    <div className={click ? `${styles.navbar__menu} ${styles.active}` : styles.navbar__menu}>
                        <NavItem to={"/"} onClick={closeMenu}>Portfolio</NavItem>
                        <NavItem to={"/"} onClick={closeMenu}>About</NavItem>
                        <NavItem to={"/"} onClick={closeMenu}>Contact</NavItem>
                    </div>
                    <div className={styles.navbar__icon} onClick={handleClick}>
                        <span>&#9776;</span>
                    </div>
                </div>
            </Container>
        </header>
    )
}

function NavItem({to, children, onClick}) {
    return (
        <div className={styles.navbar__item} onClick={onClick}>
            <Link href={to}>
                {children}
            </Link>
        </div>
    )
}