import { styled } from "styled-components";

export const PostArticle = styled.article`

    background: ${({theme}) => theme.cores['gray600']};
    border-radius: 8px;
    padding: 2.5rem;
    margin-bottom: 2rem;
`

export const PostHeader = styled.header`

    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({theme}) => theme.cores['gray200']};

    & > div {
        display: flex;
        align-items: center;
        gap: 1rem;
        line-height: 160%;

        div {
            strong {
                display: block;
                color: ${({theme}) => theme.cores['white']};
            }
            span {
                display: block;
            }
        }
    }  
    
    time {
        color: ${({theme}) => theme.cores['gray300']};
        font-size: 0.875rem;
    }
`

export const PostConteudo = styled.div`

    margin-top: 1.5rem;
    color: ${({theme}) => theme.cores['gray200']};
    line-height: 160%;

    p + p {
        margin-top: 1rem;
    }

    .link {
        color: ${({theme}) => theme.cores['green-light']};
        font-weight: bold;
        text-decoration: none;
    }
`

export const PostFormComentario = styled.form`

    margin-top: 1.5rem;
    border-top: 1px solid ${({theme}) => theme.cores['gray500']};

    label {
        color: ${({theme}) => theme.cores['gray100']};
        font-size: 1rem;
        display: block;
        margin-top: 1.5rem;
    }

    textarea {
        margin-top: 1rem;
        background-color: ${({theme}) => theme.cores['gray700']};
        border: 1px solid ${({theme}) => theme.cores['gray700']};
        color: ${({theme}) => theme.cores['gray400']};
        width: 100%;
        border-radius: 8px;
        padding: 1rem;
        resize: none;
        line-height: 140%;
        font-size: 1rem;
        
        &:focus {
            border: 1px solid ${({theme}) => theme.cores['green']};
            color: ${({theme}) => theme.cores['gray200']};
        }
    }

    button[type=submit] {
        margin-top: 1rem;
        background-color: ${({theme}) => theme.cores['green']};
        color: ${({theme}) => theme.cores['white']};
        border-radius: 8px;
        padding: 0.875rem 1.5rem;
        border: none;
        font-weight: 700;
        font-size: 1rem;
        
        &:disabled {
            opacity: 0.7;
            cursor: not-allowed;
        }
        
        &:not(:disabled):hover {
            transition: 0.1s;
            background-color: ${({theme}) => theme.cores['green-light']};
        }
    }

    footer {
        visibility: hidden;
        max-height: 0;
    }

    &:focus-within footer{

            visibility: visible;
            max-height: none;
    }
`