import { userInfo } from 'os';
import { useContext } from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { ChallengeContext } from '../../contexts/ChallengeContext';
import { Container } from '../../styles/components/Profile';
export default function Profile() {
    const { level } = useContext(ChallengeContext);
    const { user } = useContext(AuthContext);
    return (
        <Container>
            <img src={user.avatar_url} alt={user.name} />
            <div>
                <strong>{user.name}</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </Container>
    );
}
