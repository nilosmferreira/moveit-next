import styled from 'styled-components';

export const Button = styled.button<{ active: boolean; hasFinish: boolean }>`
    width: 100%;
    height: 5rem;

    margin-top: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 5px;
    background: ${({ active }) =>
        active ? 'var(--red)' : 'var(--blue)'}; // var(--blue);
    color: var(--white);

    font-size: 1.25rem;
    font-weight: 600;

    transition: background-color 0.02s;
    :not(:disabled):hover {
        background: ${({ active }) =>
            active ? 'var(--red)' : 'var(--blue-dark)'}; // var(--blue-dark);
    }
    /* :hover {
        background: ${({ active }) =>
        active ? 'var(--red)' : 'var(--blue-dark)'}; // var(--blue-dark);
    } */

    :disabled {
        background-color: var(--white);
        color: var(--green);
        cursor: not-allowed;
        border-bottom: 3px solid var(--green);
    }
`;
export const Container = styled.div`
    display: flex;
    align-items: center;
    font-family: Rajdhani;
    font-weight: 600;
    color: var(--title);
    > span {
        font-size: 6.25rem;
        margin: 0 0.5rem;
    }
    > div {
        flex: 1;

        display: flex;
        align-items: center;
        justify-content: space-evenly;

        background: var(--white);
        box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
        border-radius: 5px;
        font-size: 8.5rem;
        text-align: center;
        > span {
            flex: 1;
        }
        > span:first-child {
            border-right: 1px solid #f0f1f3;
        }
        > span:last-child {
            border-left: 1px solid #f0f1f3;
        }
    }
`;
