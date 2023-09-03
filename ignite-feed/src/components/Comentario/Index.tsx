import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar/Index";
import { ComentarioContainer } from "./styles";
import { useState } from "react";

interface ComentarioProps {
    content: string,
    deleteComment: (param: string) => void,
}

export function Comentario({content, deleteComment}: ComentarioProps){

    const [likeCount, setLikeCount] = useState(0)

    function handleLikeCount(){
        setLikeCount((valorAtual) => {
            return valorAtual + 1
        })
    }

    function handleDeleteComment(){
        deleteComment(content)
    }

    return (
        <ComentarioContainer>
            <Avatar imgUrl="https://github.com/GBDev13.png" haBordas={false} />

            <div className="commentBox">
                <div className="commentContent">
                    <header>
                        <div>
                            <strong>GB Dev</strong>
                            <time title='11 de maio de 2023' dateTime='2023-05-11 20:26:00'>
                                há 1 hora
                            </time>
                        </div>
                        <button onClick={handleDeleteComment}>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
                <footer>
                    <button
                        onClick={handleLikeCount}
                    >
                        <ThumbsUp />
                        Aplaudir <span>&nbsp;&#8226;&nbsp;{likeCount}</span>
                    </button>
                </footer>
            </div>
        </ComentarioContainer>
    )
}