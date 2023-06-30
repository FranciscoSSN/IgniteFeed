// Criando Componente Sidebar 

import { PencilLine } from '@phosphor-icons/react'

import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar() {
    return(
        <aside className={styles.sidebar}> 
            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
            />

            <div className={styles.profile}>
                <Avatar 
                   src='https://pps.whatsapp.net/v/t61.24694-24/356484376_234695209366523_1297059507606636774_n.jpg?ccb=11-4&oh=01_AdQYJkfHSzq34aqgvHSKUPrVSF2RxJ9rttzAUlFxVt3IdA&oe=64AAF736'
                />

                <strong>
                    Francisco Neto
                </strong>

                <span>
                    Developer
                </span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}