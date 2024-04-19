import React from 'react';
import {Platform, ScrollView, StyleSheet, View} from 'react-native';
import Greeting from './Greeting';
import QuoteSlider from './QuoteSlider';
import Features from './Features';
import FeaturedTherapists from './FeaturedTherapists';
import {Colors} from '../../../General/utils/constants';
import FeaturedStories from './FeatureStories';

const Landing = (props: any) => {
  console.log(JSON.stringify(props, null, 2));

  return (
    <View style={styles.container}>
      <Greeting />
      <ScrollView>
        <QuoteSlider />
        <Features />
        <FeaturedTherapists />
        <FeaturedStories />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS !== 'android' ? 80 : 30,
    backgroundColor: Colors.WHITE,
    paddingBottom: 50,
  },
});

export default Landing;
