import React, {PropsWithChildren} from 'react';
import {StyleSheet, ScrollView, Platform} from 'react-native';
import {DropShadow} from '../../../General/components/DropShadow';

const WhyUsWrapper = ({children}: PropsWithChildren) => {
  return (
    <ScrollView style={styles.container}>
      <DropShadow>{children}</DropShadow>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingTop: Platform.OS === 'android' ? 20 : 40,
    flex: 1,
  },
});

export default WhyUsWrapper;
