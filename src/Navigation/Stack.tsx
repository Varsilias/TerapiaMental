import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Intro from '../Screens/Intro';
import Signup from '../Screens/Signup';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <>
      <Stack.Navigator screenOptions={{title: '', headerShown: false}}>
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </>
  );
};

export default StackNavigator;
