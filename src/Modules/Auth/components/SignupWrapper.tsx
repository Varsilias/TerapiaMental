import React, {PropsWithChildren} from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors, Fonts} from '../../../General/utils/constants';

const SignupWrapper = ({
  activeIndex,
  children,
}: PropsWithChildren<{activeIndex: number}>) => {
  const steps = [1, 2, 3];
  const isSelected = (currentIndex: number, activeStepIndex: number) => {
    const selectedStepsList = Array.from(
      {length: currentIndex + 1},
      (_, index) => index,
    );

    return selectedStepsList.includes(activeStepIndex);
  };
  return (
    <View style={styles.signUpContainer}>
      <View style={styles.counter}>
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <TouchableOpacity
              style={[
                styles.steps,
                isSelected(activeIndex, index)
                  ? {backgroundColor: Colors.TEAL}
                  : {backgroundColor: Colors.GREY},
              ]}
              activeOpacity={1}>
              <Text
                style={[
                  styles.stepText,
                  isSelected(activeIndex, index)
                    ? {color: Colors.WHITE}
                    : {color: Colors.BLACK},
                ]}>
                {step}
              </Text>
            </TouchableOpacity>
            {index !== steps.length - 1 && <View style={styles.line} />}
          </React.Fragment>
        ))}
      </View>
      <View style={styles.childContainer}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  signUpContainer: {
    backgroundColor: Colors.WHITE,
    flex: 1,
    paddingTop: Platform.OS !== 'android' ? 50 : 0,
  },
  counter: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: Colors.BLACK,
    flexDirection: 'row',
    marginTop: 28,
    marginBottom: 24,
  },
  steps: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: Fonts.MEDIUM,
    textAlign: 'center',
    fontSize: 20,
    overflow: 'hidden',
    borderRadius: 60,
  },

  stepText: {
    fontFamily: Fonts.MEDIUM,
    fontSize: 19,
  },
  line: {
    width: 43,
    height: 5,
    backgroundColor: Colors.GREY,
  },
  childContainer: {
    // backgroundColor: Colors.TEAL,
  },
});

export default SignupWrapper;
