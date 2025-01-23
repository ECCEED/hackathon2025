import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function MedicalHistory() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Medical History</Text>
      <Text style={styles.subtitle}>Select an option to proceed:</Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>

      <View style={styles.grid}>
        {/* View History Card */}
        <Link href="/medH/ViewHistory" style={styles.card}>
          <Text style={styles.cardTitle}>View History         </Text>
          <Text style={styles.cardDescription}>
                    Access your past medical records and consultations.
          </Text>
        </Link>

        {/* Add Record Card */}
        <Link href="/medH/MedicinesRecords" style={styles.card}>
          <Text style={styles.cardTitle}>Medicines Records      </Text>
          <Text style={styles.cardDescription}>
          Access your past medecines Records.
          </Text>
        </Link>

        {/* Doctor Notes Card */}
        <Link href="/medH/perscriptions" style={styles.card}>
          <Text style={styles.cardTitle}>Perscriptions      </Text>
          <Text style={styles.cardDescription}>
            View notes and prescriptions from your doctors.
          </Text>
        </Link>

        {/* Appointments Card */}
        <Link href="/medH/Allergies" style={styles.card}>
          <Text style={styles.cardTitle}>Allergies           </Text>
          <Text style={styles.cardDescription}>
            Manage your past medical appointments.
          </Text>
        </Link>

        {/* Lab Results Card */}
        <Link href="/medH/Vaccines" style={styles.card}>
          <Text style={styles.cardTitle}>Vaccines     </Text>
          <Text style={styles.cardDescription}>
            View and track your lab test results over time.
          </Text>
        </Link>

        {/* Insurance Details Card */}
        <Link href="/medH/PastSurgeries" style={styles.card}>
          <Text style={styles.cardTitle}>Past Surgerie                  </Text>
          <Text style={styles.cardDescription}>
            Access and manage your insurance information.
          </Text>
        </Link>  
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
    marginBottom: 30,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#0078d4',
    borderRadius: 10,
    padding: 20,
    width: '48%',
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#FFFFFF',
    lineHeight: 20,
  },
});
