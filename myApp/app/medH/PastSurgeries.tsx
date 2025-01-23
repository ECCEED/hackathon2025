import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function PastSurgeries() {
  // Sample past surgery records
  const pastSurgeries = [
    {
      id: '1',
      name: 'Appendectomy',
      surgeon: 'Dr. Smith',
      date: '2023-06-15',
      description: 'Removal of the appendix due to acute appendicitis.',
    },
    {
      id: '2',
      name: 'Knee Arthroscopy',
      surgeon: 'Dr. Johnson',
      date: '2022-12-05',
      description: 'Minimally invasive surgery to diagnose and treat knee joint problems.',
    },
    {
      id: '3',
      name: 'Gallbladder Removal',
      surgeon: 'Dr. Lee',
      date: '2021-09-20',
      description: 'Cholecystectomy to remove the gallbladder due to gallstones.',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Past Surgeries</Text>

      <FlatList
        data={pastSurgeries}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.recordCard}>
            <Text style={styles.recordName}>{item.name}</Text>
            <Text style={styles.recordDetails}>Surgeon: {item.surgeon}</Text>
            <Text style={styles.recordDetails}>Date: {item.date}</Text>
            <Text style={styles.recordDetails}>Description: {item.description}</Text>
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
    color: '#0078D4', // Blue color for surgery names
    marginBottom: 8,
  },
  recordDetails: {
    fontSize: 14,
    color: '#4B5563',
    marginBottom: 4,
  },
});
