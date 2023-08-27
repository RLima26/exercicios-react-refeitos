import { PencilSimpleLine } from "phosphor-react";
import { Avatar } from "../Avatar/Index";
import { CardPerfilContainer, Footer, ImgCapa, PerfilContainer } from "./styles";

export function CardPerfil(){
    return (
        <CardPerfilContainer>
            <ImgCapa 
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            />

            <PerfilContainer>
                <Avatar imgUrl="http://github.com/RLima26.png" />
                <strong>Robson Leitão</strong>
                <span>Desenvolvedor Frontend</span>
            </PerfilContainer>

            <Footer>
                <button>
                    <PencilSimpleLine size={20} />
                    Editar seu perfil
                </button>
            </Footer>
        </CardPerfilContainer>
    )
}