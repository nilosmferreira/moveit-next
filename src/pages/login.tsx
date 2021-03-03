import Head from 'next/head';
import React from 'react';
import InputBox from '../components/InputBox';
import { Git, LoginContainer, LoginSection } from '../styles/pages/login';

export default function Login() {
    return (
        <LoginContainer>
            <Head>
                <title>Entrar</title>
            </Head>
            <div>
                <img src="favicon.svg" />
            </div>
            <LoginSection>
                <div>
                    <img src="simbolo.svg" />
                </div>
                <div>
                    <img src="logo-login.svg" />
                    <span>Bem-vindo</span>
                    <Git>
                        <img src="icons/git.svg" />
                        <p>Faça login com seu Github para começar</p>
                    </Git>
                    <InputBox />
                </div>
            </LoginSection>
        </LoginContainer>
    );
}
