// import the package right at the top
import {Shadow} from 'react-native-shadow-2';
import {StyleSheet} from 'react-native';
import React, {PropsWithChildren} from 'react';

export const DropShadow = ({
  children,
  shadowDistance,
  style,
}: PropsWithChildren<{shadowDistance?: number; style?: any}>) => {
  return (
    <Shadow
      containerStyle={[styles.shadowContainer, style]}
      stretch={true}
      distance={shadowDistance}>
      {children}
    </Shadow>
  );
};

const styles = StyleSheet.create({
  shadowContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 13,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: '100%',
  },
});
