import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar/Index";
import { ComentarioContainer } from "./styles";

export function Comentario(){
    return (
        <ComentarioContainer>
            <div>
                <Avatar imgUrl="http://github.com/RLima26.png" haBordas={false} />

                <aside>
                    <header>
                        <div>
                            <strong>Devon</strong>
                            <span>Cerca de 2h</span>
                        </div>
                        <button>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito Bom!!</p>
                </aside>
            </div>

            <footer>
                <button>
                    <ThumbsUp size={24}/>
                    <strong>
                        Aplaudir <span>&#8226; 03</span>
                    </strong>
                </button>
            </footer>
        </ComentarioContainer>
    )
}