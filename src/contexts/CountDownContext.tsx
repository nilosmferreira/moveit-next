import React, {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from 'react';
import { ChallengeContext } from './ChallengeContext';

interface CountDownContextProps {
    isActive: boolean;
    hasFinish: boolean;
    minutes: number;
    seconds: number;
    startCountDown: () => void;
    resetCountDown: () => void;
}

interface CountDownContextProvider {
    children: ReactNode;
}

export const CountDownContext = createContext({} as CountDownContextProps);

let countDownTimeOut: NodeJS.Timeout;
const minutesTotal = 0.1;
export function CountDownContextProvider({
    children,
}: CountDownContextProvider) {
    const [time, setTime] = useState(minutesTotal * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinish, setHasFinish] = useState(false);
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const { startNewChallenge } = useContext(ChallengeContext);

    function resetCountDown() {
        clearTimeout(countDownTimeOut);
        setIsActive(false);
        setTime(minutesTotal * 60);
        setHasFinish(false);
    }

    function startCountDown() {
        setIsActive(true);
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countDownTimeOut = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        } else if (isActive && time === 0) {
            setHasFinish(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time]);

    return (
        <CountDownContext.Provider
            value={{
                hasFinish,
                isActive,
                minutes,
                seconds,
                resetCountDown,
                startCountDown,
            }}
        >
            {children}
        </CountDownContext.Provider>
    );
}
