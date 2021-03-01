import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    > span {
        font-size: 1rem;
    }
`;
export const ContainerProgress = styled.div`
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background-color: var(--gray-line);
    margin: 0 1.5rem;
    position: relative;
`;
export const ExperienceProgress = styled.div`
    height: 4px;
    border-radius: 4px;
    background-color: var(--green);
    transition: width 0.2s;
`;
export const LegendProgress = styled.span`
    position: absolute;
    top: 12px;
    transform: translateX(-50%);
`;
