import React from "react";
import { Text, View, } from "react-native";
import LoginForm from '@/components/LoginForm';


export default function Login() {

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{textAlign: 'center', fontSize: 24, marginBottom: 30}}>Login</Text>
      <LoginForm />
    </View>
  );
}