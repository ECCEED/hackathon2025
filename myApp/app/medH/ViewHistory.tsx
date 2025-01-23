import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ViewHistory() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>View Medical History</Text>
      <Text style={styles.subtitle}>Your Past Records:</Text>

      <View style={styles.recordContainer}>
        <View style={styles.record}>
          <Text style={styles.recordTitle}>Record 1</Text>
          <Text style={styles.recordDetails}>Date: 01/15/2025</Text>
          <Text style={styles.recordDetails}>Details: General Checkup</Text>
        </View>

        <View style={styles.record}>
          <Text style={styles.recordTitle}>Record 2</Text>
          <Text style={styles.recordDetails}>Date: 12/10/2024</Text>
          <Text style={styles.recordDetails}>Details: Blood Test</Text>
        </View>

        <View style={styles.record}>
          <Text style={styles.recordTitle}>Record 3</Text>
          <Text style={styles.recordDetails}>Date: 10/22/2024</Text>
          <Text style={styles.recordDetails}>Details: Vaccination</Text>
        </View>

        <View style={styles.record}>
          <Text style={styles.recordTitle}>Record 4</Text>
          <Text style={styles.recordDetails}>Date: 08/05/2024</Text>
          <Text style={styles.recordDetails}>Details: Prescription Renewal</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 20,
  },
  recordContainer: {
    marginTop: 20,
  },
  record: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  recordTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0078D4',
    marginBottom: 5,
  },
  recordDetails: {
    fontSize: 14,
    color: '#4B5563',
  },
});
