import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import TabBar from '../Modules/Home/components/TabBar';
import Landing from '../Modules/Home/components/Landing';
import Therapy from '../Modules/Therapy/components/Index';
import Tools from '../Modules/Tools/components/Index';
import Profile from '../Modules/Profile/components/Index';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBar={props => <TabBar {...props} />}>
        <Tab.Screen name="Home" component={Landing} />
        <Tab.Screen
          name="Browse Therapist"
          component={Therapy}
          options={{tabBarLabel: 'Therapy', headerShown: true}}
        />
        <Tab.Screen
          name="Tools and Resources"
          component={Tools}
          options={{tabBarLabel: 'Tools', headerShown: true}}
        />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </>
  );
};
