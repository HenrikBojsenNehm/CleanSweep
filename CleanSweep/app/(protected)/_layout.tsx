import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name="map" options={{headerShown: false}} />
      <Stack.Screen name="(admin)" options={{ headerShown: false }} />
    </Stack>
  )
}
