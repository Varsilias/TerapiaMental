import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import {Colors, Fonts} from '../utils/constants';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationType} from '../../Navigation/types/navigation';

export const CommingSoon = () => {
  const navigation = useNavigation<StackNavigationType>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>We are currently working...</Text>
      <Text style={styles.supportText}>
        This feature is currently undergoing testing and will be made available
        to everyone soon
      </Text>
      <View style={styles.image}>
        <Image source={require('../../images/CalmIcon.png')} />
      </View>
      <View style={styles.bookAgainContainer}>
        <TouchableOpacity
          style={[styles.bookAgainBtn]}
          onPress={() => {
            navigation.goBack();
          }}>
          <Text
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              color: Colors.WHITE,
              fontFamily: Fonts.MEDIUM,
              fontSize: 14,
              textAlign: 'center',
            }}>
            Go Back
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    flex: 1,
  },
  title: {
    marginTop: 50,
    marginBottom: 10,
    fontFamily: Fonts.MEDIUM,
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: 40,
  },
  supportText: {
    marginBottom: 60,
    fontFamily: Fonts.N_REGULAR,
    fontSize: 16,
    color: '#373737',
    textAlign: 'center',
    marginHorizontal: 40,
  },
  bookAgainBtn: {
    paddingVertical: 16,
    borderRadius: 7,
    backgroundColor: '#005468',
    marginTop: 10,
    justifyContent: 'center',
    width: '100%',
  },
  bookAgainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 40,
  },
  image: {
    marginHorizontal: 62,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 55,
  },
});
