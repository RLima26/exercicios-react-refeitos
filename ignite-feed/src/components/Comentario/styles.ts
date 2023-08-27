import { styled } from "styled-components";

export const ComentarioContainer = styled.div`

    margin-top: 2rem;

    /* &>div {
        display: flex;
        flex: 1;    
        gap: 1rem;
    } */

    aside {
        background: ${({theme}) => theme.cores['gray650']};
        padding: 1rem;
        border-radius: 8px;
        margin-bottom: 1rem;

        header {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            margin-bottom: 1rem;

            div {
                display: flex;
                flex-direction: column;

                strong {
                    color: ${({theme}) => theme.cores['gray100']};
                }
                
                span {
                    color: ${({theme}) => theme.cores['gray300']};
                    font-size: 0.75rem;
                }

            }

            button {
                background: none;
                border: none;
                color: ${({theme}) => theme.cores['gray300']};

                &:hover {
                    transition: 0.1s;
                    color: ${({theme}) => theme.cores['red']};
                }
            }
        }

        p {
            font-size: 0.875rem;
            color: ${({theme}) => theme.cores['gray200']};
        }
    }

    footer {
        button {
            background: transparent;
            border: 0;
            color: ${({theme}) => theme.cores['gray300']};
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 0.5rem;
            font-size: 0.875rem;

            &:hover {
                transition: 0.1s;
                color: ${({theme}) => theme.cores['green']};
            }
        }
    }
`


