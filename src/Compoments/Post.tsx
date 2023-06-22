/* eslint-disable no-unused-vars */
// Criando componente Post para as publicações

import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import styles from "./Post.module.css";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: 'paragraph' | 'link';
  content: string;
}

export interface PostType {
  id: number;
  author: Author;
  publishedAt: Date;
  content: Content[];
}

interface PostProps {
  post: PostType;
}

// estado = váriaveis que eu quero que o componente monitore
export function Post({ post}: PostProps) {

  const [comments, setComments] = useState([
    'Comentando para Teste'
  ])

  const [newCommentText, setNewCommentText] = useState('') // armazena em tempo real tudo que é digitado no textarea

  // eslint-disable-next-line no-unused-vars
  const publishedAtFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewCommit(event: FormEvent) {
    event.preventDefault();
    
    setComments([...comments, newCommentText ]); //spreat = copia os valores que já existem
    setNewCommentText('');
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    // console.log(event)
    // validando campo textarea
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function deleteComment(commentToDelete: string) {
    // console.log(`Deletar comentario ${comment}`)
    // imutabilidadel => as variáveis não sofrem mutação, mais sim nós criamos um novo valor na memória

    const commentsWhithoutDeleteOne = comments.filter(comment => {
      return comment !== commentToDelete
    });

    setComments(commentsWhithoutDeleteOne)
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      
      {/* Cabeçalho do Post */}
      <header>
        <div className={styles.author}>
          <Avatar
            src={post.author.avatarUrl}
          />

          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time title={publishedAtFormatted} dateTime={post.publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      {/* Conteudo Post */}

      <div className={styles.content}>
        {post.content.map(line => {
          if(line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          }else if (line.type === 'link') {
            return <p key={line.content}>{line.content}</p>
          }
        })}
      </div>

      {/* Comentarios do Post */}

      <form onSubmit={handleCreateNewCommit} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe seu comentario"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment 
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />)
        })}
      </div>
    </article>
  );
}
