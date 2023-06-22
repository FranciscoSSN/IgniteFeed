// Criando Componente Cabeçalho Header

import styles from './Header.module.css';

import igniteLogo from '../assets/Ignite-logo.svg';
//console.log(igniteLogo)

export function Header() {
    return (
        <div>
            <header className={styles.header}>
                <img src={igniteLogo} alt='Logo do Ignite'/>
            </header>
        </div>
    );
}