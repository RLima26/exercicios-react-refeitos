import { ChangeEvent, FormEvent, useState } from "react";
import { Avatar } from "../Avatar/Index";
import { Comentario } from "../Comentario/Index";
import { PostArticle, PostConteudo, PostFormComentario, PostHeader } from "./styles";
import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface Author {
    name: string,
    role: string,
    avatarUrl: string,
}

interface ContentPost {
    type: 'paragraph' | 'link',
    content: string,
}

export interface PostType {
    id: number,
    author: Author,
    publishedAt: Date,
    content: ContentPost[],
}

export function Post({author, content, publishedAt}: PostType){

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })
    // esse código serve para calcular a distancia entre a data atual e uma data informada
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })
    const [newCommentText, setNewCommentText] = useState('')
    const [comments, setComments] = useState([
        'muito bom, parabens.'
    ])
    const isNewCommentEmpty = newCommentText.length === 0


    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
        setNewCommentText(event.target.value)
    }

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault()
        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function deleteComment(commentToDelete: string){
        const newCommentList = comments.filter(comment=>{
            return comment != commentToDelete
        })
        setComments(newCommentList)
    }
    
    return (
        <PostArticle>
            <PostHeader>
                <div>
                    <Avatar imgUrl={author.avatarUrl} />
                    <div>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </PostHeader>

            <PostConteudo>
                {content.map(item => {
                    if(item.type === 'paragraph'){
                        return <p key={item.content}>{item.content}</p>

                    }else if(item.type === 'link'){
                        return <p key={item.content}><a className="link" href='#'>{item.content}</a></p>
                    }
                })}
            </PostConteudo>

            <PostFormComentario onSubmit={handleCreateNewComment}>
                <label htmlFor="comentario">Deixe seu feedback</label>
                <textarea 
                    name='commentario'
                    placeholder='Deixe um comentário'
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                    required
                />
                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>
                        Publicar
                    </button>
                </footer>
            </PostFormComentario>
            
            {comments.map(comment => {
                return (
                    <Comentario 
                        key={comment} 
                        content={comment} 
                        deleteComment={deleteComment} 
                    />
                )
            })}
        </PostArticle>
    )
}