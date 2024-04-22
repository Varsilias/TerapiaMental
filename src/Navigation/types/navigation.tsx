import {NavigationProp} from '@react-navigation/native';

export type ScreenNames = [
  'Intro',
  'Signup',
  'Login',
  'Home',
  'TherapistProfile',
]; // type these manually
export type RootStackParamList = Record<ScreenNames[number] | string, any>;
export type StackNavigationType = NavigationProp<RootStackParamList>;
