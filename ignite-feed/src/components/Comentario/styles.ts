import { styled } from "styled-components";

export const ComentarioContainer = styled.div`

    margin-top: 1.5rem;
    display: flex;
    gap: 1rem;

    .commentBox {
        flex: 1;
    }

    .commentContent {
        background: ${({theme}) => theme.cores['gray650']};
        border-radius: 8px;
        padding: 1rem;
    }

    .commentContent header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }

    header {
        strong {
            display: block;
            font-size: 0.875rem;
            line-height: 1.6;
            color: ${({theme}) => theme.cores['gray200']};
        }

        time {
            display: block;
            line-height: 1.6;
            font-size: 0.75rem;
            color: ${({theme}) => theme.cores['gray300']};
        }

        button {
            background: transparent;
            border: 0;
            color: ${({theme}) => theme.cores['gray300']};
            line-height: 0;
            border-radius: 2px;

            &:hover {
                color: ${({theme}) => theme.cores['red']};
            }
        }
    }

    .commentContent p {
        margin-top: 1rem;
        color: ${({theme}) => theme.cores['gray200']};
    }

    .commentBox footer {
        margin-top: 1rem;
    }

    .commentBox footer button {
        background: transparent;
        border: 0;
        color: ${({theme}) => theme.cores['gray300']};
        display: flex;
        align-items: center;
        border-radius: 2px;
        font-size: 1rem;
    }

    .commentBox footer button:hover {
        color: ${({theme}) => theme.cores['green-light']};
    }

    .commentBox footer button svg {
        margin-right: 0.5rem;
    }

`