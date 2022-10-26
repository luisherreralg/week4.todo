import styles from './footer.module.css';

export function Footer() {
    const date = new Date();

    return (
        <footer className={styles.footer}>
            <address>MANOLITO</address>
            <p>{date.toLocaleString()}</p>
        </footer>
    );
}
