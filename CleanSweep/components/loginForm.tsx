import { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { useAuth } from '@/context/AuthContext';

export default function LoginForm() {
    const { onLogin } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={{alignItems: 'center'}}>
            <TextInput
            style={{margin: 5, padding: 10, width: 200, borderColor: 'gray', borderWidth: 1}}
            placeholder="Username"
            onChangeText={setUsername}
            />
            <TextInput
            style={{margin: 5, padding: 10, width: 200, borderColor: 'gray', borderWidth: 1}}
            placeholder="Password"
            secureTextEntry={true}
            autoCapitalize='none'
            onChangeText={setPassword}
            />
            <TouchableOpacity
                style={{ backgroundColor: 'blue', padding: 10, margin: 10, borderRadius: 5 }}
                onPress={() => onLogin!(username, password)}
            >
                <Text style={{ color: 'white' }}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}