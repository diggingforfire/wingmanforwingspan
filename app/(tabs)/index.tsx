import ScoreCard from '@/components/ScoreCard';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function ScoreScreen() {
  return (
    <View style={styles.container}>
      <ScoreCard
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});