import {  View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import CreateUserForm from '@/components/createUserForm';
import { StatusBar } from 'expo-status-bar';

export default function CreateUser() {
    const { authState } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (authState?.authenticated !== true || authState?.role !== "admin") {
            router.replace("/login");
        }
    }, [authState]);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <StatusBar style='dark' />
            <Text style={{ fontSize: 25, alignSelf:'center', marginBottom: 30 }}>Create User</Text>
            <CreateUserForm />
            <TouchableOpacity
                style={{ position: 'absolute', top: 35, right: 25, backgroundColor: 'blue', padding: 10, margin: 10, borderRadius: 5 }}
                onPress={() => {
                    router.back();
                }}
            >
                <Text style={{ color: 'white' }}>Back</Text>
            </TouchableOpacity>
        </View>
    )
}