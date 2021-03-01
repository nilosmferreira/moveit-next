import { useContext } from 'react';
import { ChallengeContext } from '../../contexts/ChallengeContext';
import { Container } from '../../styles/components/Profile';
export default function Profile() {
    const { level } = useContext(ChallengeContext);
    return (
        <Container>
            <img
                src="https://github.com/nilosmferreira.png"
                alt="Nilo Ferreira"
            />
            <div>
                <strong>Nilo Ferreira</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </Container>
    );
}
