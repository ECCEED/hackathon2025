import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.logoContainer}>
        <Text style={styles.title}>Welcome to Home</Text>
        <Text style={styles.subtitle}>Your personal assistant at your fingertips</Text>
      </View>

      {/* Description Section */}
      <Text style={styles.description}>
        Explore the features of our app to make your experience smoother and more productive. 
        Whether you're looking to chat with our AI or access other tools, we've got you covered!
      </Text>

      {/* Button Section */}
      <View style={styles.buttonContainer}>
        <Link href="/chatBot" style={[styles.button, styles.primaryButton]}>
          <Text style={styles.primaryButtonText}>              ChatBot</Text>
        </Link>

        <Link href="/MyDocuments" style={[styles.button, styles.secondaryButton]}>
          <Text style={styles.secondaryButtonText}>       Medical History</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB', // Light neutral background for a modern look
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1F2937', // Dark neutral for titles
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#4B5563', // Subtle gray for subtitles
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#6B7280', // Light gray for the body text
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: 'row', // Align buttons side-by-side
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  button: {
    flex: 1, // Equal width for both buttons
    marginHorizontal: 8, // Spacing between buttons
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#2563EB', // Modern blue for primary button
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: '#E5E7EB', // Neutral light gray for secondary button
  },
  secondaryButtonText: {
    color: '#1F2937', // Dark text for secondary button
    fontSize: 16,
    fontWeight: '600',
  },
});
