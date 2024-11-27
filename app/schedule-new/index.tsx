import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function FishFeedingScheduleScreen() {
  const router = useRouter();
  
  // Handlers for each button
  const handleScheduleFeedings = () => {
    // Navigate to scheduling screen (you'll create this later)
    router.push('/feeding-schedule');
  };

  const handlePreview = () => {
    Alert.alert('Schedule Preview', 'Next feeding: Today at 08:00 AM\nUpcoming: Tomorrow at 08:00 AM');
  };

  const handleHistory = () => {
    // Navigate to history screen (you'll create this later)
    router.push('/feeding-history');
  };

  const handleFeedNow = () => {
    Alert.alert(
      'Feed Now',
      'Would you like to feed your fish now?',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Yes',
          onPress: () => {
            // Add API call to trigger feeding here
            Alert.alert('Success', 'Feeding initiated!');
          }
        }
      ]
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Fish Feeding Schedule</Text>
        <TouchableOpacity style={styles.settingsIcon}>
          <Text style={styles.settingsText}>⚙️</Text>
        </TouchableOpacity>
      </View>

      {/* Fish Feeder Section */}
      <View style={styles.feederSection}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }} // Replace with actual image URL
          style={styles.feederImage}
        />
        <Text style={styles.feederTitle}>Fish Feeder Pro</Text>
        <Text style={styles.feederStatus}>IoT Connected</Text>
      </View>

      {/* Feeding Schedule Section */}
      <View style={styles.scheduleSection}>
        <Text style={styles.sectionTitle}>Feeding Schedule</Text>
        <View style={styles.scheduleItem}>
          <Text style={styles.scheduleLabel}>Time</Text>
          <Text style={styles.scheduleValue}>08:00 AM</Text>
        </View>
        <View style={styles.scheduleItem}>
          <Text style={styles.scheduleLabel}>Date</Text>
          <Text style={styles.scheduleValue}>Today</Text>
        </View>
        <View style={styles.scheduleItem}>
          <Text style={styles.scheduleLabel}>Frequency</Text>
          <Text style={styles.scheduleValue}>Everyday</Text>
        </View>
      </View>

      {/* Buttons */}
      <TouchableOpacity style={styles.blackButton} onPress={handleScheduleFeedings}>
        <Text style={styles.buttonText}>Schedule Feedings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.grayButton} onPress={handlePreview}>
        <Text style={styles.buttonTextGray}>Feeding Schedule Preview</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.blackButton} onPress={handleHistory}>
        <Text style={styles.buttonText}>Feeding History</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.blackButton} onPress={handleFeedNow}>
        <Text style={styles.buttonText}>Feed Now</Text>
      </TouchableOpacity>

      {/* Stats Section */}
      <View style={styles.statsSection}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>50</Text>
          <Text style={styles.statLabel}>Total Feedings</Text>
          <Text style={styles.statChange}>+10%</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>5</Text>
          <Text style={styles.statLabel}>Average Feedings per Day</Text>
          <Text style={styles.statChange}>+2%</Text>
        </View>
      </View>

      {/* User Reviews */}
      <View style={styles.reviewsSection}>
        <Text style={styles.reviewUser}>HappyFish123 ⭐⭐⭐⭐⭐</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // [Previous styles remain the same]
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  settingsIcon: {
    padding: 8,
  },
  settingsText: {
    fontSize: 20,
  },
  feederSection: {
    alignItems: 'center',
    marginBottom: 16,
  },
  feederImage: {
    width: 150,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  feederTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  feederStatus: {
    fontSize: 14,
    color: 'green',
  },
  scheduleSection: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  scheduleItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  scheduleLabel: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  scheduleValue: {
    fontSize: 14,
  },
  blackButton: {
    backgroundColor: '#000',
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 8,
  },
  grayButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonTextGray: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
  statsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  statItem: {
    alignItems: 'center',
    width: '48%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    marginTop: 4,
    color: '#666',
  },
  statChange: {
    fontSize: 12,
    color: 'green',
    marginTop: 4,
  },
  reviewsSection: {
    marginTop: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  reviewUser: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
