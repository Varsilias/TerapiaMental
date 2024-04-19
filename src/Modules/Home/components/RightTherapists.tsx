import React from 'react';
import WhyUsWrapper from './WhyUsWrapper';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors, Fonts} from '../../../General/utils/constants';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationType} from '../../../Navigation/types/navigation';

const RightTherapists = () => {
  const navigation = useNavigation<StackNavigationType>();

  return (
    <WhyUsWrapper>
      <View style={styles.container}>
        <Text style={styles.title}>Find Your Perfect Match</Text>
        <Text style={styles.body}>
          At TerapiaMental, we're committed to helping you find your perfect
          match. Our platform connects you with a diverse network of experienced
          therapists who specialize in various modalities and areas of
          expertise. With detailed therapist profiles, client reviews, and
          transparent ratings, you can make informed decisions and choose a
          therapist who aligns with your unique needs and goals. We're here to
          help you embark on a transformative therapeutic journey tailored to
          your individuality
        </Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('Browse Therapist');
            }}
            activeOpacity={0.8}>
            <Text style={styles.btn_text}>Find Therapist</Text>
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
    backgroundColor: Colors.TEAL,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    overflow: 'hidden',
    height: 55,
    marginTop: 25,
    marginBottom: 46,
    padding: 10,
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

export default RightTherapists;
