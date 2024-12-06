import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity } from "react-native";

function createUser(username: any, password: any, confirmPassword: any, role: any) {
    const regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;

    if (username === '' || password === '' || confirmPassword === '') {
        alert("The fields cannot be empty");
    } else {
        if (!regex.test(password) || !regex.test(confirmPassword)) {
            alert("Password must be at least 8 characters long, contain at least one uppercase letter, one number, and one special character");
        } else {
            if (password !== confirmPassword) {
                alert("Passwords do not match");
            } else {
                alert("Username: " + username + " Password: " + password + " Confirm Password: " + confirmPassword + " Role: " + role);
            }
        }
    }
}

export default function CreateUserForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminText, setIsAdminText] = useState('User');

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
                autoCapitalize='none'
                placeholder="Password"
            />
            <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 200, marginBottom: 10}}
                onChangeText={text => setConfirmPassword(text)}
                secureTextEntry={true}
                value={confirmPassword}
                autoCapitalize='none'
                placeholder="Confirm password"
            />
            <TouchableOpacity onPress={() => {
                if (isAdmin) {
                    setIsAdmin(false);
                } else {
                    setIsAdmin(true);
                }
                setIsAdminText(isAdmin ? 'User' : 'Admin');
            }}>
                <Text style={{padding: 10}}>The user role is {isAdminText}</Text>
            </TouchableOpacity>
            <View style={{width: 96, height: 40, margin: 10, alignSelf: 'center', backgroundColor: '#007AFF', borderRadius: 5}}>
                <TouchableOpacity onPress={() => {createUser(username, password, confirmPassword, isAdminText.toLowerCase())}}>
                    <Text style={{padding: 10, color: '#fff'}}>Create User</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}