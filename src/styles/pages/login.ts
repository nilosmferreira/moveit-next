import styled from 'styled-components';

export const LoginContainer = styled.div`
    height: 100vh;
    /* max-width: 1440px; */
    margin: 0 auto;
    padding: 2.5rem 2rem;

    display: flex;
    flex-direction: column;

    background-color: var(--blue);
`;
export const Git = styled.div`
    display: flex;
    width: 318px;
    height: 60px;
    margin-top: 24px;
    margin-bottom: 40px;
    /* border: 1px solid green; */
    > img {
        width: 40px;
        height: 40px;
        margin-right: 24px;
        margin-bottom: 96px;
    }
    > p {
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        /* line-height: 30px; */
        letter-spacing: 0em;
        text-align: left;
        color: var(--text-highlight);
    }
`;
export const LoginSection = styled.section`
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6.25rem;
    align-content: center;
    > div:first-child {
        /* width: 768px; */
        /* height: 660px; */
        > img {
            position: absolute;
            left: 0px;
            top: 80px;
        }
    }
    > div:last-child {
        display: flex;
        flex-direction: column;
        > img {
            width: 360px;
            height: 76px;
        }
        > span {
            font-family: 'Inter', sans-serif;
            font-style: normal;
            font-weight: 600;
            font-size: 36px;
            line-height: 46px;
            color: var(--white);
            margin-top: 113px;
        }
    }
`;
