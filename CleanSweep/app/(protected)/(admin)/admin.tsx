import { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "expo-router";
import { StatusBar } from 'expo-status-bar';

export default function Admin() {
    const { onLogout, authState } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (authState?.authenticated !== true || authState?.role !== "admin") {
            router.replace("/login");
        }
    }, [authState]);

    return (
        <View
        style={{
            flex: 1,
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
        }}
        >
        <StatusBar style='dark' />
            <Text style={{ fontSize: 25, alignSelf:'center', marginBottom: 30 }}>Admin</Text>
            <TouchableOpacity
                style={{ position: 'absolute', top: 35, right: 25, backgroundColor: 'blue', padding: 10, margin: 10, borderRadius: 5 }}
                onPress={() => {
                    onLogout!();
                }}
            >
                <Text style={{ color: 'white' }}>Logout</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ backgroundColor: 'blue', padding: 10, margin: 10, borderRadius: 5 }}
                onPress={() => {
                    router.push("/(protected)/(admin)/createUser");
                }}
            >
                <Text style={{ color: 'white' }}>Create User</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ backgroundColor: 'blue', padding: 10, margin: 10, borderRadius: 5 }}
                onPress={() => {
                    router.push("/(protected)/map");
                }}
            >
                <Text style={{ color: 'white' }}>Map</Text>
            </TouchableOpacity>
        </View>
    );
}