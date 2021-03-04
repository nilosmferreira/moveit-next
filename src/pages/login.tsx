import { Form } from '@unform/web';
import Router from 'next/router';
import Head from 'next/head';
import React, { useContext } from 'react';
import InputBox from '../components/InputBox';
import { AuthContext } from '../contexts/AuthContext';
import { Git, LoginContainer, LoginSection } from '../styles/pages/login';

export default function Login() {
    const { login } = useContext(AuthContext);

    const handleOnSubmit = async (dados: { userId: string }) => {
        const retorno = await login(dados.userId);
        if (retorno.executed) {
            Router.push('/');
        } else {
            alert('usuário não encontrado!');
        }
    };
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
                    <Form onSubmit={handleOnSubmit}>
                        <img src="logo-login.svg" />
                        <span>Bem-vindo</span>
                        <Git>
                            <img src="icons/git.svg" />
                            <p>Faça login com seu Github para começar</p>
                        </Git>
                        <InputBox />
                    </Form>
                </div>
            </LoginSection>
        </LoginContainer>
    );
}
