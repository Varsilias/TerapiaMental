/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Image,
} from 'react-native';
import {Fonts} from '../../../General/utils/constants';
import {DropShadow} from '../../../General/components/DropShadow';

const TabBar = ({state, descriptors, navigation}: any) => {
  const images = [
    {id: 0, icon: require('../../../images/HomeIcon.png')},
    {id: 1, icon: require('../../../images/TherapyIcon.png')},
    {id: 2, icon: require('../../../images/ToolsIcon.png')},
    {id: 3, icon: require('../../../images/ProfileIcon.png')},
  ];
  return (
    <DropShadow>
      <View style={[styles.tabBarContainer]}>
        {state.routes.map((route: any, index: any) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.iconAndTextContainer}
              key={index}>
              {images.map(
                ({id, icon}) =>
                  id === index && (
                    <Image
                      source={icon}
                      key={id}
                      style={[
                        styles.icon,
                        isFocused
                          ? {tintColor: '#005468'}
                          : {tintColor: '#bdbbbbf6'},
                      ]}
                    />
                  ),
              )}
              <Text
                style={[
                  styles.text,
                  {color: isFocused ? '#005468' : '#bdbbbbf6'},
                ]}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </DropShadow>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    height: Platform.OS === 'android' ? 70 : 80,
    paddingHorizontal: 44,
    paddingTop: 21,
    paddingBottom: 18,
    // borderTopWidth: 1,
  },
  iconAndTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginBottom: 6,
  },
  text: {
    fontFamily: Fonts.SEMI_BOLD,
    fontSize: 14,
  },
});

export default TabBar;
