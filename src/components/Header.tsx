import styles from "./Header.module.css";

import LogoToDoList from "../assets/logoToDoList.svg"

export function Header() {
    return (
        <header className={styles.header}>
            <img src={LogoToDoList} />
        </header>
    )
}