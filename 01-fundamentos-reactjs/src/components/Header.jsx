import styles from "./Header.module.css"
//console.log(styles)
import igniteLogo from '../assets/ignite-logo.svg'
//console.log(igniteLogo) -> src

export function Header() {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logotipo do Ignite"/>
        </header>
        
    );
}