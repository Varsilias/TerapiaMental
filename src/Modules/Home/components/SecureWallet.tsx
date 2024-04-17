import React from 'react';
import WhyUsWrapper from './WhyUsWrapper';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors, Fonts} from '../../../General/utils/constants';

const SecureWallet = () => {
  return (
    <WhyUsWrapper>
      <View style={styles.container}>
        <Text style={styles.title}>Manage Your Funds Securely</Text>
        <Text style={styles.body}>
          Your financial security is our top priority at TerapiaMental. Our
          secure wallet feature provides you with a safe and convenient way to
          manage your funds within the app. Whether you're adding credits for
          therapy sessions or receiving refunds, rest assured that your
          transactions are encrypted and protected with industry-leading
          security measures. With peace of mind knowing your sensitive
          information is safeguarded, you can focus on your therapy journey
          without worry
        </Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {}}
            activeOpacity={0.8}>
            <Text style={styles.btn_text}>Manage Wallet</Text>
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

export default SecureWallet;
