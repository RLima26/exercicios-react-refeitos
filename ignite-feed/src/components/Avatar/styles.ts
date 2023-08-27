import { styled } from "styled-components";

export const AvatarContainer = styled.img`

    &.avatar {
        width: 3rem;
        height: 3rem;
        border-radius: 8px;
    }

    &.avatarComBordas {
        width: calc(3rem + 12px);
        height: calc(3rem + 12px);
        border-radius: 8px;
        border: 4px solid ${({theme}) => theme.cores['gray700']};
        outline: 2px solid ${({theme}) => theme.cores['green']};
    }
`