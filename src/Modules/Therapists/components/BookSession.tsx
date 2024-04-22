import {RouteProp} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {StackNavigationType} from '../../../Navigation/types/navigation';

const BookSession = ({
  route,
}: {
  navigation: StackNavigationType;
  route: RouteProp<Record<string, any>>;
}) => {
  const params = route.params;
  console.log('Therapist ID Book Session', params);
  return (
    <View>
      <Text>BookSession</Text>
    </View>
  );
};

export default BookSession;
