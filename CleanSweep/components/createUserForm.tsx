import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useAuth } from "@/context/AuthContext";


function createUser(username: string, password: string, confirmPassword: string, role: string) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (username === '' || password === '' || confirmPassword === '' || role === '') {
        alert('All fields are required');
        return;
    } else if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    } else if (!regex.test(password) || !regex.test(confirmPassword)) {
        alert('Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character');
        return;

    } else{
        console.log(`Username: ${username}, Password: ${password}, Role: ${role}`);
        alert(`User ${username} created with role ${role}`);
    }
}

export default function CreateUserForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('');
    const [roleTxt, setRoleTxt] = useState('User');

    return (
        <View>
            <TextInput
                style={{ margin: 5, padding: 10, width: 200, borderColor: 'gray', borderWidth: 1 }}
                placeholder="Username"
                onChangeText={setUsername}
            />
            <TextInput
                style={{ margin: 5, padding: 10, width: 200, borderColor: 'gray', borderWidth: 1 }}
                placeholder="Password"
                secureTextEntry={true}
                autoCapitalize='none'
                onChangeText={setPassword}
            />
            <TextInput
                style={{ margin: 5, padding: 10, width: 200, borderColor: 'gray', borderWidth: 1 }}
                placeholder="Confirm Password"
                secureTextEntry={true}
                autoCapitalize='none'
                onChangeText={setConfirmPassword}
            />
            <TouchableOpacity
                style={{ backgroundColor: 'green', padding: 10, margin: 10, borderRadius: 5 }}
                onPress={() => {
                    if (role === 'admin') {
                        setRole('user');
                        setRoleTxt('User');
                    } else {
                        setRole('admin');
                        setRoleTxt('Admin');
                    }
                }}
            >
                <Text style={{ color: 'white' }}>Select role: {roleTxt}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ backgroundColor: 'blue', padding: 10, margin: 10, borderRadius: 5 }}
                onPress={() => {
                    createUser(username, password, confirmPassword, role);
                }
                }
            >
                <Text style={{ color: 'white' }}>Create User</Text>
            </TouchableOpacity>
        </View>
    );
};