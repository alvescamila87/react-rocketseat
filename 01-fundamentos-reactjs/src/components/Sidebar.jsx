import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1672957581550-6b37dcdbf6ff?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
            </img>

            <div className={styles.profile}>
                <img 
                    className={styles.avatar}
                    src="http://github.com/alvescamila87.png">
                </img>
                <strong>Camila Alves</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine side={20}/>
                    Update your profile
                </a>
            </footer>
        </aside>
    );
}