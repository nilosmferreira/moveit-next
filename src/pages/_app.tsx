import { AuthProvider } from '../contexts/AuthContext';
import GlobalStyled from '../styles/Global-Styled';

function MyApp({ Component, pageProps }) {
    return (
        <AuthProvider>
            <GlobalStyled />
            <Component {...pageProps} />
        </AuthProvider>
    );
}

export default MyApp;
