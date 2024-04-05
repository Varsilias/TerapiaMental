import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Fonts, Colors} from '../utils/constants';

const SplashScreen = () => {
  return (
    <View style={styles.splashContainer}>
      <Text style={styles.splashText}>TerapiaMental</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashText: {
    fontFamily: Fonts.SEMI_BOLD,
    fontSize: 40,
    color: Colors.PRIMARY_BLACK,
  },
});

export default SplashScreen;
