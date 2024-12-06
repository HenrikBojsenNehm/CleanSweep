import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import CreateUserForm from '@/components/CreateUserForm';
import { useRouter } from "expo-router";

export default function CreateUser() {
    const router = useRouter();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{position: 'absolute', top: 35, right: 20, width: 52, height: 40, margin: 10, alignSelf: 'center', backgroundColor: '#007AFF', borderRadius: 5}}>
          <TouchableOpacity onPress={() => {router.back()}}>
            <Text style={{padding: 10, color: '#fff'}}>Back</Text>
          </TouchableOpacity>
        </View>
        <Text style={{textAlign: 'center', fontSize: 24, marginBottom: 30}}>Create User</Text>
        <CreateUserForm />
    </View>
  );
}