import { useContext, useMemo } from 'react';
import { ChallengeContext } from '../../contexts/ChallengeContext';
import {
    Container,
    ContainerProgress,
    ExperienceProgress,
    LegendProgress,
} from '../../styles/components/ExperienceBar';

export function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useContext(
        ChallengeContext
    );

    const percentToNextLevel = useMemo(() => {
        return (currentExperience * 100) / experienceToNextLevel;
    }, [currentExperience, experienceToNextLevel]);

    return (
        <Container>
            <span>{currentExperience} xp</span>
            <ContainerProgress>
                <ExperienceProgress
                    style={{ width: `${percentToNextLevel}%` }}
                />
                <LegendProgress style={{ left: `${percentToNextLevel}%` }}>
                    {currentExperience} xp
                </LegendProgress>
            </ContainerProgress>
            <span>{experienceToNextLevel} xp</span>
        </Container>
    );
}
