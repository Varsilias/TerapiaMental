import {NavigationProp} from '@react-navigation/native';

export type ScreenNames = ['Intro', 'Signup', 'Login']; // type these manually
export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type StackNavigationType = NavigationProp<RootStackParamList>;
