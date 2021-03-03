import styled from 'styled-components';
export const ButtonInputBox = styled.button<{ hasValue?: boolean }>`
    color: var(--white);
    font-size: 25px;
    /* transform: rotate(-180deg); */
    width: 80px;
    height: 80px;
    background: ${({ hasValue }) =>
        hasValue ? 'var(--green)' : 'var(--blue-dark)'};
    border-radius: 0px 5px 5px 0px;
    border: 0;
`;
export const Container = styled.div`
    > input {
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 34px;
        letter-spacing: 0em;
        text-align: left;
        color: var(--white);
        padding: 10px;

        ::placeholder {
            color: var(--text-highlight);
        }
        width: 340px;
        height: 79px;
        border: 0;
        background: linear-gradient(
            90deg,
            var(--blue-dark) 0%,
            rgba(73, 83, 184, 0.2) 100%
        );
        border-radius: 5px 0px 0px 5px;

        :hover {
            border: 1.5px solid #414aa3;
            box-sizing: border-box;
        }
        :focus {
            outline: 0;
        }
    }
`;
