import React, { useState, useEffect } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from '@/context/AuthContext';

export default function Index() {
  const { OnLogout, AuthState } = useAuth();
  const [backText, setBackText] = useState('Logout');
  const [role, setRole] = useState('user');
  const router = useRouter();

  useEffect(() => {
    if (AuthState?.role === 'admin') {
      setBackText('Back');
      setRole('admin');
    } else {
      setBackText('Logout');
      setRole('user');
    }
  }, [AuthState]);

  const onLogoutPress = async () => {
    if (role === 'admin') {
      router.replace('/(protected)/(admin)/admin');
    } else {
      OnLogout!();
    }
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ alignSelf: 'stretch', height: '100%', elevation: 1 }}
        mapPadding={{ top: 50, right: 0, bottom: 0, left: 0 }}
        userInterfaceStyle = "dark"
        showsTraffic = {true}
        loadingEnabled = {true}
      >
      </MapView>
      <View style={{position: 'absolute', minWidth: 52, height: 40, top: 35, right: 20, elevation: 2, backgroundColor: '#007AFF', borderRadius: 5}}>
        <TouchableOpacity onPress={onLogoutPress}>
          <Text style={{padding: 10, color: '#fff'}}>{backText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}