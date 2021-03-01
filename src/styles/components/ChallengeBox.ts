import styled from 'styled-components';

export const ChallengeBoxContainer = styled.div`
    height: 100%;
    background: var(--white);

    border-radius: 5px;
    box-shadow: 0 0 68px rgba(0, 0, 0, 0.05);
    padding: 1.5rem 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;
`;
export const ChallengeActive = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    > strong {
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 1.4;
    }
    > p {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 70%;
        margin-top: 3rem;
        line-height: 1.4;
        > img {
            margin-top: 1rem;
        }
    }
`;

export const ChallengeActiveHeader = styled.header`
    color: var(--blue);
    font-weight: 600;
    font-size: 1.25rem;
    padding: 0 2rem 1.5rem;
    border-bottom: 1px solid var(--gray-line);
`;
export const ChallengeActiveMain = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > img {
        margin-top: 1rem;
    }
    > strong {
        font-weight: 600;
        font-size: 2rem;
        color: var(--title);
        margin: 1.5rem 0 1rem;
    }
    > p {
        line-height: 1.5;
    }
`;
export const ChallengeActiveFooter = styled.footer`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    width: 100%;
`;
export const ChallengeActiveButton = styled.button`
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    outline: 0;
    border-radius: 5px;

    color: var(--white);
    font-size: 1rem;
    font-weight: 600;

    transition: filter 0.2s;

    :hover {
        filter: brightness(0.9);
    }
    &.failedChallengeButton {
        background: var(--red);
    }
    &.succeedeedChallengeButton {
        background: var(--green);
    }
`;
