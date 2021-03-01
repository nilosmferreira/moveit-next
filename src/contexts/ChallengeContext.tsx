import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';
import Cookies from 'js-cookie';
import challenges from '../challeges.json';

interface ChallengeContextProviderProps {
    children: ReactNode;
    level: number;
    currentExperience: number;
    challengesCompleted: number;
}

interface Challenge {
    type: string;
    description: string;
    amount: number;
}

interface ChallengeContextProps {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    activeChallenge: Challenge;
    experienceToNextLevel: number;
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
    completedChallenge: () => void;
    closeLevelUpModal: () => void;
}

export const ChallengeContext = createContext<ChallengeContextProps>(
    {} as ChallengeContextProps
);

export function ChallengeProvider({
    children,
    ...rest
}: ChallengeContextProviderProps) {
    const [level, setLevel] = useState(rest.level ?? 1);
    const [currentExperience, setCurrentExperience] = useState<number>(
        rest.currentExperience ?? 0
    );
    const [challengesCompleted, setChallengesCompleted] = useState<number>(
        rest.challengesCompleted ?? 0
    );
    const [activeChallenge, setActiveChallenge] = useState<Challenge>(null);
    const [isLevelUpModalOpen, setIsLevelUpModalUp] = useState(false);

    const experienceToNextLevel = useMemo(() => {
        const nextLevel = Math.pow((level + 1) * 4, 2);
        return nextLevel;
    }, [level]);

    useEffect(() => {
        Notification.requestPermission();
    }, []);

    useEffect(() => {
        Cookies.set('level', String(level));
        Cookies.set('currentExperience', String(currentExperience));
        Cookies.set('challengesCompleted', String(challengesCompleted));
    }, [level, currentExperience, challengesCompleted]);

    const levelUp = () => {
        setLevel((prevState) => prevState + 1);
        setIsLevelUpModalUp(true);
    };

    const startNewChallenge = () => {
        const randomChallengeIndex = Math.floor(
            Math.random() * challenges.length
        );

        const challenge = challenges[randomChallengeIndex];
        setActiveChallenge(challenge);
        new Audio(`/notification.mp3`).play();

        if (Notification.permission === 'granted') {
            new Notification('Novo desafio 🎉🎉🎉', {
                body: `Valendo ${challenge.amount}xp`,
                icon: '/favicon.png',
            });
        }
    };

    const resetChallenge = () => {
        setActiveChallenge(null);
    };
    const closeLevelUpModal = () => setIsLevelUpModalUp(false);
    const completedChallenge = () => {
        if (!activeChallenge) return;

        const { amount } = activeChallenge;

        let finalExperience = currentExperience + amount;

        if (finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }

        setActiveChallenge(null);
        setCurrentExperience(finalExperience);
        setChallengesCompleted((prevState) => prevState + 1);
    };

    return (
        <ChallengeContext.Provider
            value={{
                level,
                currentExperience,
                challengesCompleted,
                activeChallenge,
                experienceToNextLevel,
                levelUp,
                startNewChallenge,
                resetChallenge,
                completedChallenge,
                closeLevelUpModal,
            }}
        >
            {children};
        </ChallengeContext.Provider>
    );
}
