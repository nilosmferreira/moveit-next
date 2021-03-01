import { useContext } from 'react';
import { CountDownContext } from '../../contexts/CountDownContext';
import { Button, Container } from '../../styles/components/CountDown';
export function CountDown() {
    const {
        minutes,
        seconds,
        startCountDown,
        resetCountDown,
        isActive,
        hasFinish,
    } = useContext(CountDownContext);

    const [minuteDec, minuteUni] = String(minutes).padStart(2, '0').split('');
    const [secondDec, secondUni] = String(seconds).padStart(2, '0').split('');

    const handleOnSubmit = () => {
        if (isActive) {
            resetCountDown();
        } else {
            startCountDown();
        }
    };
    return (
        <div>
            <Container>
                <div>
                    <span>{minuteDec}</span>
                    <span>{minuteUni}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondDec}</span>
                    <span>{secondUni}</span>
                </div>
            </Container>
            <Button
                disabled={hasFinish}
                type="submit"
                active={isActive}
                hasFinish={hasFinish}
                onClick={handleOnSubmit}
            >
                {hasFinish
                    ? 'Ciclo Encerrado'
                    : isActive
                    ? 'Parar ciclo'
                    : 'Iniciar ciclo'}
            </Button>
        </div>
    );
}
