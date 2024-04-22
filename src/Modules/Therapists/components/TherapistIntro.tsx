import React, {useState} from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Fonts} from '../../../General/utils/constants';
import TherapistReviews from './TherapistReviews';
import Bio from './Bio';

const TherapistIntro = () => {
  const [tab, setTab] = useState(0);
  const tabs = [{title: 'Bio'}, {title: 'Review'}];
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.therapistName}>Obinna Nwachukwu</Text>
        <View style={styles.chargeContainer}>
          <Image
            source={require('../../../images/NairaIcon.png')}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{marginRight: 4}}
          />
          <Text style={styles.charge}>{`${'5,000'}/hr`}</Text>
        </View>
        <View style={styles.tabContainer}>
          {tabs.map(({title}, index) => {
            return (
              <View
                key={index}
                style={[
                  tab === index && styles.active,
                  styles.tabItemContainer,
                ]}>
                <TouchableOpacity
                  onPress={() => setTab(index)}
                  activeOpacity={1}>
                  <Text
                    style={[styles.text, tab === index && styles.textActive]}>
                    {title}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </View>
      <View style={styles.scrollContainer}>
        {tab === 1 ? <TherapistReviews /> : <Bio />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingBottom: 18,
  },
  therapistName: {
    fontFamily: Fonts.SEMI_BOLD,
    fontSize: 23,
    color: '#252525',
    marginBottom: 5,
  },
  chargeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 23,
  },
  charge: {
    fontFamily: Fonts.REGULAR,
    fontSize: 17,
    color: '#46A4BC',
  },
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#7e7e7e5b',
  },
  bio: {},
  text: {
    fontFamily: Fonts.MEDIUM,
    fontSize: 20,
    color: '#7E7E7E',
  },
  textActive: {
    color: '#005468',
  },
  active: {
    color: '#005468',
    borderBottomColor: '#005468',
    borderBottomWidth: 5,
  },
  tabItemContainer: {
    paddingVertical: 11,
    marginRight: 63,
  },
  scrollContainer: {
    paddingBottom: Platform.OS === 'android' ? 500 : 550,
  },
});

export default TherapistIntro;
