import GlobalStyled from '../styles/Global-Styled';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyled />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
