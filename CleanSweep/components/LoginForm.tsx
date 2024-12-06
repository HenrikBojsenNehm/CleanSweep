import React, {useState} from 'react';
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { useAuth } from '@/context/AuthContext';

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { OnLogin } = useAuth();

    return (
        <View>
            <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 200, marginBottom: 10}}
                onChangeText={text => setUsername(text)}
                value={username}
                placeholder="Username"
            />
            <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 200, marginBottom: 10}}
                onChangeText={text => setPassword(text)}
                secureTextEntry={true}
                value={password}
                placeholder="Password"
            />
            <View style={{width: 56, height: 40, margin: 10, alignSelf: 'center', backgroundColor: '#007AFF', borderRadius: 5}}>
                <TouchableOpacity onPress={() => {OnLogin!(username, password)}}>
                    <Text style={{padding: 10, color: '#fff'}}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}