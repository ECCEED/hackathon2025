import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router'; // Import Link from expo-router

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('@/assets/images/health.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Skin First</Text>
        <Text style={styles.subtitle}>Dermatology Center</Text>
      </View>

      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>

      <View style={styles.buttonContainer}>
        <Link href="../login" style={styles.loginButton}>
          <Text style={styles.loginText}>                                          Log In</Text>
        </Link>
        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: '#007AFF',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#007AFF',
    marginTop: 5,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    marginHorizontal: 20,
    lineHeight: 20,
  },
  buttonContainer: {
    width: '100%',
  },
  loginButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  signupButton: {
    backgroundColor: '#E5F1FF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  signupText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '500',
  },
});
