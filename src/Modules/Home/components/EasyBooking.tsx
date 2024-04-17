import React from 'react';
import WhyUsWrapper from './WhyUsWrapper';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors, Fonts} from '../../../General/utils/constants';

const EasyBooking = () => {
  return (
    <WhyUsWrapper>
      <View style={styles.container}>
        <Text style={styles.title}>Simplify Your Therapy Sessions</Text>
        <Text style={styles.body}>
          At TerapiaMental, we believe in making therapy accessible and
          convenient for everyone. Our user-friendly interface allows you to
          browse through a diverse selection of therapists, view their
          availability, and schedule appointments with ease. Whether you prefer
          in-person sessions or virtual consultations, our platform streamlines
          the booking process, so you can focus on what matters most – your
          well-being
        </Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {}}
            activeOpacity={0.8}>
            <Text style={styles.btn_text}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </WhyUsWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingTop: 40,
    // backgroundColor: 'red',
    // flex: 1,
  },
  title: {
    fontFamily: Fonts.SEMI_BOLD,
    fontSize: 17,
    textAlign: 'center',
    color: '#3C3C3C',
    marginBottom: 24,
  },
  body: {
    fontFamily: Fonts.REGULAR,
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 35,
    color: '#6C6C6C',
    marginBottom: 24,
  },
  button: {
    width: '50%',
    backgroundColor: Colors.TEAL,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    overflow: 'hidden',
    height: 55,
    marginTop: 25,
    marginBottom: 46,
  },
  btn_text: {
    color: Colors.WHITE,
    fontFamily: Fonts.SEMI_BOLD,
    fontSize: 19,
  },
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default EasyBooking;
