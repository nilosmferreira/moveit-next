import Cookies from 'js-cookie';
import { createContext, useEffect, useState } from 'react';
import { IUser } from '../interfaces/IUser';

interface IAuthContextProviderProps {
    user: IUser;
    isLoggedIn: boolean;
    login: (login: string) => Promise<IExecute>;
    logout: () => void;
}
interface IExecute {
    executed: boolean;
    message: string;
}
export const AuthContext = createContext({} as IAuthContextProviderProps);

export function AuthProvider({ children }) {
    const [user, setUser] = useState<IUser>();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const token = Cookies.get('token');
    // const { client, db } = connectToDatabase();

    const login = async (userId: string): Promise<IExecute> => {
        const response = await fetch(`https://api.github.com/users/${userId}`);
        try {
            const u = await response.json();
            const newUser = Object.assign({}, u) as IUser;

            Cookies.set('token', JSON.stringify(newUser));
            setUser(newUser);
            return { executed: true, message: 'Succedd' };
        } catch (error) {
            return { executed: false, message: error.message };
        }
    };
    const logout = async () => {
        Cookies.remove('token');
        setUser(undefined);
    };
    useEffect(() => {
        if (token) {
            const userToken = JSON.parse(token) as IUser;
            setUser(userToken);
        }
    }, []);

    useEffect(() => {
        setIsLoggedIn(user !== undefined);
    }, [user]);

    return (
        <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
