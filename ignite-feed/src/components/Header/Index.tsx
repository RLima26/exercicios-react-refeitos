import { HeaderContainer } from "./styles";
import logoIgnite from '../../assets/App name.svg'

export function Header(){
    return (
        <HeaderContainer>
            <img src={logoIgnite} alt="" />
        </HeaderContainer>
    )
}