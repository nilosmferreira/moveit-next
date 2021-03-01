import React, { useContext } from 'react';
import { ChallengeContext } from '../../contexts/ChallengeContext';
import { CountDownContext } from '../../contexts/CountDownContext';
import {
    ChallengeActive,
    ChallengeActiveButton,
    ChallengeActiveFooter,
    ChallengeActiveHeader,
    ChallengeActiveMain,
    ChallengeBoxContainer,
} from '../../styles/components/ChallengeBox';

function ChallengeBox() {
    const { activeChallenge, resetChallenge, completedChallenge } = useContext(
        ChallengeContext
    );
    const { resetCountDown } = useContext(CountDownContext);
    const handleChallengeSucceeded = () => {
        completedChallenge();
        resetCountDown();
    };
    const handleChallendFailed = () => {
        resetChallenge();
        resetCountDown();
    };
    return (
        <ChallengeBoxContainer>
            {activeChallenge ? (
                <ChallengeActive>
                    <ChallengeActiveHeader>
                        Ganhe {activeChallenge.amount} de xp
                    </ChallengeActiveHeader>
                    <ChallengeActiveMain>
                        <img src={`icons/${activeChallenge.type}.svg`} alt="" />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </ChallengeActiveMain>
                    <ChallengeActiveFooter>
                        <ChallengeActiveButton
                            className="failedChallengeButton"
                            onClick={handleChallendFailed}
                        >
                            Falhei
                        </ChallengeActiveButton>
                        <ChallengeActiveButton
                            className="succeedeedChallengeButton"
                            onClick={handleChallengeSucceeded}
                        >
                            Completei
                        </ChallengeActiveButton>
                    </ChallengeActiveFooter>
                </ChallengeActive>
            ) : (
                <ChallengeActive>
                    <strong>
                        Finalize um ciclo para receber desafios a serem
                        completados
                    </strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level up" />
                        Avance de level completando desafios!
                    </p>
                </ChallengeActive>
            )}
        </ChallengeBoxContainer>
    );
}
export default ChallengeBox;
