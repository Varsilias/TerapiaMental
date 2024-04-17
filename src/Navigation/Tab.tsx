import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../Screens/Home';
import TabBar from '../Modules/Home/components/TabBar';
import Landing from '../Modules/Home/components/Landing';

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
        <Tab.Screen name="Therapy" component={Home} />
        <Tab.Screen name="Tools" component={Home} />
        <Tab.Screen name="Profile" component={Home} />
      </Tab.Navigator>
    </>
  );
};
