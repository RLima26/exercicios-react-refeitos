import styled from "styled-components";

export const HeaderContainer = styled.header`

    background: ${({theme}) => theme.cores['gray600']};
    height: 6.25rem;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;

    img {
        height: 3rem;
    }
`
