import React from 'react';
import WhyUsWrapper from './WhyUsWrapper';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors, Fonts} from '../../../General/utils/constants';

const TailoredTools = () => {
  return (
    <WhyUsWrapper>
      <View style={styles.container}>
        <Text style={styles.title}>
          Personalized Tools for Mental Well-being
        </Text>
        <Text style={styles.body}>
          At TerapiaMental, we understand that every individual's mental health
          journey is unique. That's why we offer a comprehensive suite of
          personalized tools to support you along the way. Our tools are
          designed to empower you with practical resources that resonate with
          your specific needs and preferences. Explore our curated collection
          and discover the tools that speak to you, helping you cultivate
          resilience, self-awareness, and emotional well-being
        </Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {}}
            activeOpacity={0.8}>
            <Text style={styles.btn_text}>Explore Tools</Text>
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

export default TailoredTools;
