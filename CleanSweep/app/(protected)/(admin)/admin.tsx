import React, {useEffect, useState} from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from '@/context/AuthContext';

export default function Admin() {
  const router = useRouter();
  const [role, setRole] = useState('admin');
  const { OnLogout, AuthState } = useAuth();
  
  useEffect(() => {
    if (AuthState?.role === 'admin') {
      setRole('admin');
    } else {
      setRole('user');
    }
  }, [AuthState]);
  
  const onLogoutPress = async () => {
    OnLogout!();
  }

  if (role !== 'admin') {
    router.replace('/');
    return null;
  } else {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{position: 'absolute', width: 66, height: 40, top: 35, right: 20, elevation: 2, backgroundColor: '#007AFF', borderRadius: 5}}>
          <TouchableOpacity onPress={onLogoutPress}>
            <Text style={{padding: 10, color: '#fff'}}>Logout</Text>
          </TouchableOpacity>
        </View>
        <Text style={{textAlign: 'center', fontSize: 24, marginBottom: 30}}>Admin</Text>
        <View style={{width: 96, height: 40, margin: 10, alignSelf: 'center', backgroundColor: '#007AFF', borderRadius: 5}}>
          <TouchableOpacity onPress={() => {router.push('/(protected)/(admin)/createUser')}}>
            <Text style={{padding: 10, color: '#fff'}}>Create User</Text>
          </TouchableOpacity>
        </View>
        <View style={{width: 49, height: 40, margin: 10, alignSelf: 'center', backgroundColor: '#007AFF', borderRadius: 5}}>
          <TouchableOpacity onPress={() => {router.replace('/')}}>
            <Text style={{padding: 10, color: '#fff'}}>Map</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}