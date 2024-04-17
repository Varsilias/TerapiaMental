import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../General/utils/constants';

const QuoteSlider = () => {
  return (
    <View style={styles.quoteContainer}>
      <Text style={styles.quoteHeader}>Quotes to Keep You Going</Text>
      <Text style={styles.quoteSubHeader}>
        Motivational phrases for continuous inspiration
      </Text>
      <ImageBackground
        source={require('../../../images/LoginBackground.png')}
        style={styles.image}>
        <View style={styles.quote}>
          <Text style={styles.quoteText}>
            "Courage doesn't happen when you have all the answers. It happens
            when you are ready to face the questions you have been avoiding.
          </Text>
          <Text style={styles.quoteAuthor}>- Shannon L. Alder</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  quoteContainer: {
    marginHorizontal: 25,
    marginBottom: 21,
  },

  quoteHeader: {
    fontFamily: Fonts.SEMI_BOLD,
    fontSize: 18,
    color: '#3C3C3C',
  },

  quoteSubHeader: {
    fontFamily: Fonts.REGULAR,
    fontSize: 13,
    color: Colors.T_LIGHT_GREY,
    marginBottom: 21,
  },
  image: {
    height: 120,
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 10,
  },
  quote: {
    justifyContent: 'center',
    paddingHorizontal: 22,
    paddingVertical: 21,
  },
  quoteText: {
    fontFamily: Fonts.REGULAR,
    fontSize: 12,
    color: Colors.WHITE,
    marginBottom: 12,
  },
  quoteAuthor: {
    fontFamily: Fonts.BLACK,
    fontSize: 13,
    color: Colors.WHITE,
  },
});

export default QuoteSlider;
