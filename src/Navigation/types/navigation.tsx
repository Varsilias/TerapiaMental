import {NavigationProp} from '@react-navigation/native';

export type ScreenNames = ['Intro', 'Signup', 'Login', 'Home']; // type these manually
export type RootStackParamList = Record<
  ScreenNames[number] | string,
  undefined
>;
export type StackNavigationType = NavigationProp<RootStackParamList>;
