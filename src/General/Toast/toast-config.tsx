import React from 'react';
import {
  BaseToast,
  ErrorToast,
  BaseToastProps,
} from 'react-native-toast-message';
import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../utils/constants';

export const toastConfig = {
  /*
    Overwrite 'success' type,
    by modifying the existing `BaseToast` component
  */
  success: (props: BaseToastProps) => (
    <BaseToast
      {...props}
      style={styles.success}
      contentContainerStyle={styles.container}
      text1Style={styles.text1}
      text2Style={styles.text2}
    />
  ),
  /*
    Overwrite 'error' type,
    by modifying the existing `ErrorToast` component
  */
  error: (props: BaseToastProps) => (
    <ErrorToast
      {...props}
      text1Style={styles.text1}
      text2Style={styles.text2}
      style={styles.error}
    />
  ),
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  success: {
    backgroundColor: Colors.SUCCESS,
    borderLeftColor: Colors.SUCCESS,
  },
  text1: {
    fontFamily: Fonts.MEDIUM,
    fontSize: 16,
    color: Colors.WHITE,
  },
  text2: {
    fontFamily: Fonts.REGULAR,
    fontSize: 16,
    color: Colors.WHITE,
  },
  error: {
    backgroundColor: Colors.DANGER,
    borderLeftColor: Colors.DANGER,
  },
});
