import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function MedicationRecords() {
  // Sample medication records
  const medicationRecords = [
    {
      id: '1',
      name: 'Paracetamol',
      dosage: '500mg',
      frequency: 'Twice a day',
      prescribedBy: 'Dr. Smith',
      date: '2025-01-10',
    },
    {
      id: '2',
      name: 'Amoxicillin',
      dosage: '250mg',
      frequency: 'Three times a day',
      prescribedBy: 'Dr. Johnson',
      date: '2025-01-15',
    },
    {
      id: '3',
      name: 'Ibuprofen',
      dosage: '400mg',
      frequency: 'Once a day',
      prescribedBy: 'Dr. Lee',
      date: '2025-01-18',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Medication Records</Text>

      <FlatList
        data={medicationRecords}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.recordCard}>
            <Text style={styles.recordName}>{item.name}</Text>
            <Text style={styles.recordDetails}>Dosage: {item.dosage}</Text>
            <Text style={styles.recordDetails}>Frequency: {item.frequency}</Text>
            <Text style={styles.recordDetails}>Prescribed By: {item.prescribedBy}</Text>
            <Text style={styles.recordDetails}>Date: {item.date}</Text>
          </View>
        )}
        contentContainerStyle={styles.listContainer}
      />
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
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  recordCard: {
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
  recordName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0078D4',
    marginBottom: 8,
  },
  recordDetails: {
    fontSize: 14,
    color: '#4B5563',
    marginBottom: 4,
  },
});
