import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Login, Intro, Signup} from '../Screens';

const Stack = createNativeStackNavigator();

const StackNavigator = ({hasLaunched}: {hasLaunched: boolean}) => {
  return (
    <>
      <Stack.Navigator screenOptions={{title: '', headerShown: false}}>
        {hasLaunched ? (
          <Stack.Screen name="Login" component={Login} />
        ) : (
          <Stack.Screen name="Intro" component={Intro} />
        )}
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </>
  );
};

export default StackNavigator;
