import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Login, Intro, Signup} from '../Screens';
import {useAuthContext} from '../General/context';
import {TabNavigator} from './Tab';
import EasyBooking from '../Modules/Home/components/EasyBooking';
import SecureWallet from '../Modules/Home/components/SecureWallet';
import TailoredTools from '../Modules/Home/components/TailoredTools';
import RightTherapists from '../Modules/Home/components/RightTherapists';

const Stack = createNativeStackNavigator();

const StackNavigator = ({hasLaunched}: {hasLaunched: boolean}) => {
  const {isAuthenticated, token} = useAuthContext();
  console.log(isAuthenticated, token);

  return (
    <>
      <Stack.Navigator screenOptions={{title: '', headerShown: false}}>
        {token && isAuthenticated ? (
          <Stack.Screen name="tabs" component={TabNavigator} />
        ) : null}
        {hasLaunched ? (
          <Stack.Screen name="Login" component={Login} />
        ) : (
          <Stack.Screen name="Intro" component={Intro} />
        )}
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen
          name="EasyBooking"
          component={EasyBooking}
          options={{
            headerShown: true,
            title: 'Easy Booking',
          }}
        />
        <Stack.Screen
          name="SecureWallet"
          component={SecureWallet}
          options={{
            headerShown: true,
            title: 'Secure Wallet',
          }}
        />
        <Stack.Screen
          name="TailoredTools"
          component={TailoredTools}
          options={{
            headerShown: true,
            title: 'Tailored Tools',
          }}
        />
        <Stack.Screen
          name="RightTherapist"
          component={RightTherapists}
          options={{
            headerShown: true,
            title: 'Right Therapists',
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default StackNavigator;
