import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Link } from 'expo-router';

export default function AuthSelectorScreen() {
  return (
    <View style={styles.container}>
      {/* Link to the Log In screen */}
      <Link href="/auth/login" style={styles.button}>
        <Text style={styles.buttonText}>Log In</Text>
      </Link>

      {/* Link to the Sign Up screen */}
      <Link href="/auth/signup" style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff6600',
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginVertical: 10,
    textAlign: 'center',
  },
  buttonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
