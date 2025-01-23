import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { Link } from 'expo-router'; // Import Link from expo-router


export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Log In</Text>

      <Text style={styles.welcomeTitle}>Welcome</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>

      <View style={styles.form}>
        <Text style={styles.label}>Email or Mobile Number</Text>
        <TextInput
          style={styles.input}
          placeholder="example@example.com"
          placeholderTextColor="#A1CEDC"
          keyboardType="email-address"
        />
          <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="****"
          placeholderTextColor="#A1CEDC"
          secureTextEntry={true}
        />

       
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forget Password</Text>
        </TouchableOpacity>
      </View>

    
      <Link href="/Home" style={styles.loginButton}>
        <Text style={styles.loginText}>                                          Log In</Text>
      </Link>

      {/* Social Sign-In Section */}
      <Text style={styles.orText}>or sign up with</Text>
      

      {/* Sign Up Section */}
      <Text style={styles.signupText}>
        Don’t have an account?{' '}
        <Text style={styles.signupLink}>Sign Up</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#007AFF',
    textAlign: 'center',
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: '600',
    color: '#007AFF',
    marginTop: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  form: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#A1CEDC',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 20,
    color: '#333',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#A1CEDC',
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  eyeIcon: {
    fontSize: 18,
    color: '#A1CEDC',
  },
  forgotPassword: {
    color: '#007AFF',
    fontSize: 14,
    textAlign: 'right',
    marginTop: 10,
  },
  loginButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  orText: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 10,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  icon: {
    marginHorizontal: 10,
  },
  socialImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  signupText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 14,
  },
  signupLink: {
    color: '#007AFF',
    fontWeight: '500',
  },
});
