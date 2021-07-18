import Link from "next/link";
import styles from "./header.module.css"
import Container from "./container";
import {useState} from "react";
import Logo from "./logo";

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
                        <Logo/>
                    </div>
                    <div className={click ? `${styles.navbar__menu} ${styles.active}` : styles.navbar__menu}>
                        <NavItem to={"#portfolio"} onClick={closeMenu}>Portfolio</NavItem>
                        <NavItem to={"#about"} onClick={closeMenu}>About</NavItem>
                        <NavItem to={"#top"} onClick={closeMenu}>Contact</NavItem>
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

