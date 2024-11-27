import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter(); // For navigation
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Dummy user credentials
  const dummyUser = {
    username: 'testuser',
    password: 'password123',
  };

  const handleLogin = () => {
    if (username === dummyUser.username && password === dummyUser.password) {
      // Navigate to the Fish Feeding Schedule screen
      router.push('/schedule');
    } else {
      Alert.alert('Invalid Credentials', 'Please check your username and password.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>
      <Text style={styles.subtitle}>Welcome back!</Text>

      {/* Username Input */}
      <TextInput
        placeholder="Username"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />

      {/* Password Input */}
      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Log In Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      {/* Link to the Sign Up screen */}
      <TouchableOpacity onPress={() => router.push('/auth/signup')}>
        <Text style={styles.link}>
          Don't have an account? <Text style={styles.linkText}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff6600',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: '100%',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#d35400',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 10,
    color: '#fff',
  },
  linkText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
