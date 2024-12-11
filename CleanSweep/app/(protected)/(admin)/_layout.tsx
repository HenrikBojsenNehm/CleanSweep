import { Stack, useRouter } from "expo-router"
import { useEffect } from "react"
import { useAuth } from "@/context/AuthContext"

export default function Layout() {
    const { authState } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (authState?.authenticated !== true || authState?.role !== "admin") {
            router.replace("/login")
        }
    }, [authState])

    return (
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="admin" options={{headerShown: false}} />
            <Stack.Screen name="createUser" options={{headerShown: false}} />
        </Stack>
    )
};