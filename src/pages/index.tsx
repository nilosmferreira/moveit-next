import { Container, Section } from '../styles/pages/index';
import { ExperienceBar } from '../components/ExperienceBar';
import Profile from '../components/Profile';
import { CompleteChallenges } from '../components/CompleteChallenges';
import { CountDown } from '../components/CountDown';
import Head from 'next/head';
import ChallengeBox from '../components/ChallengeBox';
import { CountDownContextProvider } from '../contexts/CountDownContext';
import { ChallengeProvider } from '../contexts/ChallengeContext';
import { GetServerSideProps } from 'next';

interface HomeProps {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
}

export default function Home(props: HomeProps) {
    return (
        <ChallengeProvider
            level={props.level}
            currentExperience={props.currentExperience}
            challengesCompleted={props.challengesCompleted}
        >
            <Container>
                <Head>
                    <title>Início | Move.it</title>
                </Head>
                <ExperienceBar />
                <CountDownContextProvider>
                    <Section>
                        <div>
                            <Profile />
                            <CompleteChallenges />
                            <CountDown />
                        </div>
                        <div>
                            <ChallengeBox />
                        </div>
                    </Section>
                </CountDownContextProvider>
            </Container>
        </ChallengeProvider>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
    return {
        props: {
            level: Number(level),
            currentExperience: Number(currentExperience),
            challengesCompleted: Number(challengesCompleted),
        },
    };
};
