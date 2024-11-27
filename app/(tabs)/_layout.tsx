import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true, // Temporarily enable headers for debugging
      }}
    />
  );
}
