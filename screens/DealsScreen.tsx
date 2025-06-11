import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DealsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Deals Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1C1C23',
  },
  text: {
    color: '#FFF',
    fontSize: 24,
    fontFamily: 'Inter_18pt-Medium',
  },
});

export default DealsScreen;
