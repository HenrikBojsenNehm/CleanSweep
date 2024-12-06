import { useContext, createContext, useState, } from 'react';

const tempUsers = [
    { userId: 1, userName: 'user1', userPassword: 'passwordUser1!', userRole: 'admin' },
    { userId: 2, userName: 'user2', userPassword: 'passwordUser2!', userRole: 'user'},
]

export enum Role {
    ADMIN = 'admin',
    USER = 'user',
};

interface AuthProps {
    AuthState: { authenticated: boolean | null, username: string | null, role: Role | null };
    OnLogin: (username: string, password: string) => void;
    OnLogout: () => void;
};

const AuthContext = createContext<Partial<AuthProps>>({});

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }: any) => {
    const [AuthState, setAuthState] = useState<{
        authenticated: boolean | null,
        username: string | null,
        role: Role | null,
    }>({
        authenticated: null,
        username: null,
        role: null,
    });

    const login = (username: string, password: string) => {
        if (tempUsers.find(user => user.userName === username && user.userPassword === password)) {
            if (tempUsers.find(user => user.userName === username && user.userPassword === password)?.userRole === 'admin') {
                setAuthState({ authenticated: true, username: username, role: Role.ADMIN });
            } else {
                setAuthState({ authenticated: true, username: username, role: Role.USER });
            }
        } else {
            alert('Invalid username or password');
        }
    }

    const logout = async () => {
        setAuthState({ authenticated: false, username: null, role: null });
    }

    const value = {
        OnLogin: login,
        OnLogout: logout,
        AuthState,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}