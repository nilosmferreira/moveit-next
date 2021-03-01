import { useContext } from 'react';
import { ChallengeContext } from '../../contexts/ChallengeContext';
import { CompletedChallengesContainer } from '../../styles/components/CompletedChallenges';

export function CompleteChallenges() {
    const { challengesCompleted } = useContext(ChallengeContext);
    return (
        <CompletedChallengesContainer>
            <span>Desafios Completos</span>
            <span>{challengesCompleted}</span>
        </CompletedChallengesContainer>
    );
}
