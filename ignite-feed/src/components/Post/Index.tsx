import { Avatar } from "../Avatar/Index";
import { Comentario } from "../Comentario/Index";
import { PostArticle, PostConteudo, PostFormComentario, PostHeader } from "./styles";

export function Post(){
    return (
        <PostArticle>
            <PostHeader>
                <div>
                    <Avatar imgUrl="http://github.com/RLima26.png" />
                    <div>
                        <strong>Robson Leitão</strong>
                        <span>Dev Front-end</span>
                    </div>
                </div>
                <time>publicado há 1 hora</time>
            </PostHeader>

            <PostConteudo>
                <p>
                    Fala galeraa 👋
                </p>
                <p>
                    Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
                </p>
                <p className="link">
                    👉 jane.design/doctorcare
                </p>
                <p className="link">
                    #novoprojeto #nlw #rocketseat
                </p>
            </PostConteudo>

            <PostFormComentario>
                <label htmlFor="comentario">Deixe seu feedback</label>
                <textarea 
                    id="comentario" 
                    name='commentario'
                    placeholder='Deixe um comentário'
                />
                <footer>
                    <button type="submit">
                        Publicar
                    </button>
                </footer>
            </PostFormComentario>
            
            <Comentario />
        </PostArticle>
    )
}