import { useEffect, useState } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Text, View, TouchableOpacity } from "react-native";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function Map() {
  const { onLogout, authState } = useAuth();
  const router = useRouter();
  const [logoutTxt, setLogoutTxt] = useState('Logout');
  const [userRole, setUserRole] = useState('user');

  useEffect(() => {
    if (authState?.role === "admin") {
      setLogoutTxt('Back');
      setUserRole('admin');
    } else {
      setLogoutTxt('Logout');
      setUserRole('user');
    }
  }, [authState]);

  return (
    <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}
    >
    <StatusBar backgroundColor='rgba(255, 255, 255, 0.5)' style='dark' />
      <MapView
        style={{
          width: "100%",
          height: "100%",
          elevation: 2,
        }}
        provider={PROVIDER_GOOGLE}
        showsTraffic={true}
        mapPadding={{top: 35, right: 0, bottom: 0, left: 0}}
      />
      <TouchableOpacity
        style={{ position: 'absolute', top: 35, right: 25, backgroundColor: 'blue', padding: 10, margin: 10, elevation: 1, borderRadius: 5 }}
        onPress={() => {
          if (userRole === 'admin') {
            router.back();
          } else {
            onLogout!();
          }
        }}
        >
          <Text style={{ color: 'white' }}>{logoutTxt}</Text>
        </TouchableOpacity>
    </View>
  );
}
