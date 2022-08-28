import Link from "next/link";
import styles from "./Header.module.css"
import Container from "./Container";
import {useState} from "react";
import Logo from "../logo/Logo";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

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
                        <NavItem to={"#about"} onClick={closeMenu}>About</NavItem>
                        <NavItem to={"#skills"} onClick={closeMenu}>Skills</NavItem>
                        <NavItem to={"#portfolio"} onClick={closeMenu}>Portfolio</NavItem>
                        <NavItem to={"#contact"} onClick={closeMenu}>Contact</NavItem>
                        <div className={styles.navbar__item} onClick={closeMenu}>
                            <a href={"Resume_Charteros.pdf"} target={"_blank"} rel={"noreferrer"}>
                                <div className={styles.navbar__resume}>
                                    Resume
                                </div>
                            </a>
                        </div>

                    </div>
                    <div className={styles.navbar__icon} onClick={handleClick}>
                        <FontAwesomeIcon icon={faBars}/>
                    </div>
                </div>
            </Container>
        </header>
    )
}

function NavItem({to, children, onClick}) {
    return (
        <Link href={to} passHref>
            <div className={styles.navbar__item} onClick={onClick}>
                {children}
            </div>
        </Link>

    )
}

