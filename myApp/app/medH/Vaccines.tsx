import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function Vaccines() {
  // Sample vaccine records
  const vaccineRecords = [
    {
      id: '1',
      name: 'COVID-19 (Pfizer)',
      dose: 'Dose 1',
      administeredBy: 'Dr. Smith',
      date: '2024-01-10',
      nextDoseDate: '2024-02-10',
    },
    {
      id: '2',
      name: 'Hepatitis B',
      dose: 'Dose 2',
      administeredBy: 'Dr. Johnson',
      date: '2023-06-05',
      nextDoseDate: '2023-12-05',
    },
    {
      id: '3',
      name: 'Influenza',
      dose: 'Annual',
      administeredBy: 'Dr. Lee',
      date: '2024-10-15',
      nextDoseDate: '2025-10-15',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vaccination Records</Text>

      <FlatList
        data={vaccineRecords}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.recordCard}>
            <Text style={styles.recordName}>{item.name}</Text>
            <Text style={styles.recordDetails}>Dose: {item.dose}</Text>
            <Text style={styles.recordDetails}>Administered By: {item.administeredBy}</Text>
            <Text style={styles.recordDetails}>Date: {item.date}</Text>
            <Text style={styles.recordDetails}>Next Dose Date: {item.nextDoseDate}</Text>
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
    color: '#0078D4', // Blue color for vaccine-related text
    marginBottom: 8,
  },
  recordDetails: {
    fontSize: 14,
    color: '#4B5563',
    marginBottom: 4,
  },
});
