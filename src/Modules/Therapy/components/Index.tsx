import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors, Fonts} from '../../../General/utils/constants';
import {ItemProps} from '../../Home/components/FeaturedTherapists';
import TherapistList from './TherapistList';
import AppointmentList from './AppointmentList';

const Therapy = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [{title: 'Available Therapists'}, {title: 'My Appointments'}];
  const therapists: ItemProps[] = [
    {
      name: 'Adeola Eze',
      category: 'Clinical Psychologist',
      profileImage: require('../../../images/fimage3.png'),
      rating: 4.9,
    },
    {
      name: 'Chinedu Okoye',
      category: 'Marriage and Family Therapist',
      profileImage: require('../../../images/fimage2.png'),
      rating: 4.8,
    },
    {
      name: 'Fatima Ibrahim',
      category: 'Trauma Counselor',
      profileImage: require('../../../images/fimage1.png'),
      rating: 4.7,
    },

    {
      name: 'Adeola Eze',
      category: 'Clinical Psychologist',
      profileImage: require('../../../images/fimage3.png'),
      rating: 4.6,
    },
    {
      name: 'Chinedu Okoye',
      category: 'Marriage and Family Therapist',
      profileImage: require('../../../images/fimage2.png'),
      rating: 4.5,
    },
    {
      name: 'Fatima Ibrahim',
      category: 'Trauma Counselor',
      profileImage: require('../../../images/fimage1.png'),
      rating: 4.4,
    },
    {
      name: 'Adeola Eze',
      category: 'Clinical Psychologist',
      profileImage: require('../../../images/fimage3.png'),
      rating: 4.3,
    },
    {
      name: 'Chinedu Okoye',
      category: 'Marriage and Family Therapist',
      profileImage: require('../../../images/fimage2.png'),
      rating: 4.2,
    },
    {
      name: 'Fatima Ibrahim',
      category: 'Trauma Counselor',
      profileImage: require('../../../images/fimage1.png'),
      rating: 4.1,
    },
    {
      name: 'Adeola Eze',
      category: 'Clinical Psychologist',
      profileImage: require('../../../images/fimage3.png'),
      rating: 4.0,
    },
    {
      name: 'Chinedu Okoye',
      category: 'Marriage and Family Therapist',
      profileImage: require('../../../images/fimage2.png'),
      rating: 3.9,
    },
    {
      name: 'Fatima Ibrahim',
      category: 'Trauma Counselor',
      profileImage: require('../../../images/fimage1.png'),
      rating: 3.8,
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        {tabs.map(({title}, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.tabItem, index === activeTab && styles.active]}
            onPress={() => setActiveTab(index)}
            activeOpacity={1}>
            <Text
              style={[
                styles.tabContent,
                index === activeTab
                  ? styles.tabContentActive
                  : styles.tabContentInactive,
              ]}>
              {title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {activeTab === 1 ? (
        <AppointmentList />
      ) : (
        <TherapistList therapists={therapists} />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    flex: 1,
  },
  tabs: {
    paddingHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  tabContent: {
    fontFamily: Fonts.MEDIUM,
    fontSize: 16,
  },
  active: {
    borderBottomWidth: 4,
    borderBottomColor: '#005468',
    borderRadius: 2,
  },
  tabContentInactive: {
    color: '#7E7E7E',
  },

  tabContentActive: {
    color: '#005468',
  },
  tabItem: {
    paddingBottom: 10,
  },
});

export default Therapy;
