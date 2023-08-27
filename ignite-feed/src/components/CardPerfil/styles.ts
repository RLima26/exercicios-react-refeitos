import { styled } from "styled-components";

export const CardPerfilContainer = styled.aside`

    overflow: hidden;
    background: ${({theme}) => theme.cores['gray600']};
    border-radius: 8px;
`

export const ImgCapa = styled.img`

    object-fit: cover;
    width: 100%;
    height: 72px;
`

export const PerfilContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: calc(0px - 2.5rem);

    strong {
        margin-top: 1rem;
        font-weight: bold;
        font-size: 1rem;
    }

    span {
        color: ${({theme}) => theme.cores['gray300']};
    }
`

export const Footer = styled.footer`

    margin-top: 1.5rem;
    width: 100%;
    border-top: 1px solid ${({theme}) => theme.cores['gray500']};
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.625rem;
        padding: 0.75rem 1.5rem;
        background-color: transparent;
        border-radius: 8px;
        border: 1px solid ${({theme}) => theme.cores['green']};
        color: ${({theme}) => theme.cores['green']};
        font-weight: bold;
        margin-bottom: 2rem;
        margin-top: 1.5rem;
        font-size: 1rem;
        transition: 0.1s;

        &:hover {
            color: ${({theme}) => theme.cores['white']};
            background: ${({theme}) => theme.cores['green-light']};
            border-color: ${({theme}) => theme.cores['green-light']};
        }
    }
`