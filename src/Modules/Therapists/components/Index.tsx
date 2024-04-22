import React from 'react';
import {StyleSheet, View} from 'react-native';
import {StackNavigationType} from '../../../Navigation/types/navigation';
import {RouteProp} from '@react-navigation/native';
import ProfileImage from './ProfileImage';
import TherapistIntro from './TherapistIntro';

const TherapistProfile = ({
  route,
}: {
  navigation: StackNavigationType;
  route: RouteProp<Record<string, any>>;
}) => {
  const params = route.params;
  console.log('Therapist ID', params);

  return (
    <View style={styles.container}>
      <ProfileImage />
      <TherapistIntro />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default TherapistProfile;
