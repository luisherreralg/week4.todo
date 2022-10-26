import { Menu } from '../menu/menu';
import styles from './header.module.css';

export function Header() {
    return (
        <header className={styles.header}>
            <h1>Learning REACT</h1>
            <Menu></Menu>
        </header>
    );
}
