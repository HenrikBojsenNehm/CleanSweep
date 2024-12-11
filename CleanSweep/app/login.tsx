import { View, Text } from 'react-native';
import LoginForm from '@/components/loginForm';
import { StatusBar } from 'expo-status-bar';

export default function Login() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <StatusBar style='dark' />
      <Text style={{ fontSize: 25, alignSelf:'center', marginBottom: 30 }}>Login</Text>
      <LoginForm />
    </View>
  );
}