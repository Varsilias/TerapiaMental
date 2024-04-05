import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import React from 'react';
import SplashScreen from '../General/components/SplashScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <>
      {true ? (
        <SplashScreen />
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      )}
    </>
  );
};

export default StackNavigator;
