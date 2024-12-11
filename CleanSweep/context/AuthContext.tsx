import { createContext, useContext, useState } from "react";

const testUsers = [
    { username: "admin", password: "admin", role: "admin" },
    { username: "user", password: "user", role: "user" },
];

export enum Role {
    ADMIN = "admin",
    USER = "user",
}

interface AuthProps {
    authState: { authenticated: boolean | null; username: string | null; role: Role | null };
    onLogin: (username: string, password: string) => void;
    onLogout: () => void;
}

const AuthContext = createContext<Partial<AuthProps>>({});

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }: any) => {
    const [authState, setAuthState] = useState<{
        authenticated: boolean | null;
        username: string | null;
        role: Role | null;
    }>({
        authenticated: false,
        username: null,
        role: null,
    });

    const login = (username: string, password: string): any => {
        let user = testUsers.find((user) => user.username === username && user.password === password);
        if (user) {
            if (user.role === 'admin') {
                setAuthState({ authenticated: true, username: user.username, role: Role.ADMIN});
            } else if (user.role === 'user') {
                setAuthState({ authenticated: true, username: user.username, role: Role.USER });
            } else {
                alert("Invalid role");
                setAuthState({ authenticated: false, username: null, role: null });
            }
        } else {
            alert("Invalid username or password");
            setAuthState({ authenticated: false, username: null, role: null });
        }
    };

    const logout = () => {
        setAuthState({ authenticated: false, username: null, role: null });
    };

    const value = {
        authState,
        onLogin: login,
        onLogout: logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};