// Criando componente Comment - comentarios

import { ThumbsUp, Trash } from '@phosphor-icons/react';
import { Avatar } from './Avatar';
import { useState } from 'react';
import styles from './Comment.module.css';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [countLike, setCountLike] = useState(0);

    function handleDeleteComment() {
        // console.log('deletar')
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setCountLike((state) => {
            return state + 1;
        })
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://pps.whatsapp.net/v/t61.24694-24/321242409_590630026423033_4335764669861972596_n.jpg?ccb=11-4&oh=01_AdRGFr7cv7DjS11j51oMjULfpVBqN64cc0v5aa28KT_DCw&oe=649F4855" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Reuel Bandeira</strong>
                            <time title='21 de Junho às 09:22' dateTime='2023-06-21 09:23:55'>Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{countLike}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}