import { Stack } from 'expo-router/stack';
import { AuthProvider, useAuth } from '@/context/AuthContext';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';

const StackLayout = () => {
  const { AuthState } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (AuthState?.authenticated === true && AuthState?.role === 'admin') {
      router.replace('/(protected)/(admin)/admin');
    } else if (AuthState?.authenticated === true && AuthState?.role !== 'admin') {
      router.replace('/(protected)');
    } else if (AuthState?.authenticated === null || AuthState?.authenticated === false) {
      router.replace('/login');
    }
  }, [AuthState]);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" options={{ headerShown: false }} />
    </Stack>
  );
};

export default function RootLayout() {
  return (
    <AuthProvider>
      <StackLayout />
    </AuthProvider>
  );
}