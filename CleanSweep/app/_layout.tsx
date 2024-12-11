import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import { AuthProvider, useAuth } from "@/context/AuthContext";

const StackLayout = () => {
    const { authState } = useAuth();
    const router = useRouter();


    useEffect(() => {
        if (authState?.authenticated === true && authState?.role === "admin") {
            router.push('/(protected)/(admin)/admin');
        } else if (authState?.authenticated === true) {
            router.push('/(protected)/map');
        } else {
            router.replace("/login");
        }
    }, [authState]);

    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="login" options={{ headerShown: false }} />
            <Stack.Screen name="(protected)" options={{ headerShown: false }} />
        </Stack>
    )
};

export default function RootLayout() {
    return (
        <AuthProvider>
            <StackLayout />
        </AuthProvider>
    )
};