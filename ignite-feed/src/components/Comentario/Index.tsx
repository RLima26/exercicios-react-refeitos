import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar/Index";
import { ComentarioContainer } from "./styles";

export function Comentario(){
    return (
        <ComentarioContainer>
            <Avatar imgUrl="http://github.com/RLima26.png" haBordas={false} />

            <div className="commentBox">
                <div className="commentContent">
                    <header>
                        <div>
                            <strong>Devon</strong>
                            <time>Cerca de 2h</time>
                        </div>
                        <button>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito Bom!!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>&nbsp;&#8226;&nbsp;03</span>
                    </button>
                </footer>
            </div>
        </ComentarioContainer>
    )
}