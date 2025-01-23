import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function Allergies() {
  // Sample allergy records
  const allergyRecords = [
    {
      id: '1',
      name: 'Penicillin',
      type: 'Drug',
      reaction: 'Rash, Swelling',
      severity: 'Moderate',
      diagnosedBy: 'Dr. Smith',
      date: '2023-08-10',
    },
    {
      id: '2',
      name: 'Peanuts',
      type: 'Food',
      reaction: 'Anaphylaxis',
      severity: 'Severe',
      diagnosedBy: 'Dr. Johnson',
      date: '2024-05-05',
    },
    {
      id: '3',
      name: 'Dust',
      type: 'Environmental',
      reaction: 'Sneezing, Itchy Eyes',
      severity: 'Mild',
      diagnosedBy: 'Dr. Lee',
      date: '2022-11-20',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Allergy Records</Text>

      <FlatList
        data={allergyRecords}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.recordCard}>
            <Text style={styles.recordName}>{item.name}</Text>
            <Text style={styles.recordDetails}>Type: {item.type}</Text>
            <Text style={styles.recordDetails}>Reaction: {item.reaction}</Text>
            <Text style={styles.recordDetails}>Severity: {item.severity}</Text>
            <Text style={styles.recordDetails}>Diagnosed By: {item.diagnosedBy}</Text>
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
    color: '#FF6347', // Tomato color for allergy-related text
    marginBottom: 8,
  },
  recordDetails: {
    fontSize: 14,
    color: '#4B5563',
    marginBottom: 4,
  },
});
