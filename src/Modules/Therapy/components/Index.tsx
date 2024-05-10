import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors, Fonts} from '../../../General/utils/constants';
import {ItemProps} from '../../Home/components/FeaturedTherapists';
import TherapistList from './TherapistList';
import AppointmentList from './AppointmentList';
import {useGetTherapists} from '../hooks';
import {handleError} from '../../../General/utils/helpers';
import Toast from 'react-native-toast-message';

const Therapy = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [{title: 'Available Therapists'}, {title: 'My Appointments'}];
  const [therapists, setTherapist] = useState<Array<ItemProps>>([]);

  const {mutate: getFeaturedTherapist} = useGetTherapists({
    onSuccess(res) {
      const data = res?.data;
      console.log(JSON.stringify(data, null, 2));
      setTherapist(data);
    },
    onError(error: any) {
      console.log(error);

      handleError(error, message => {
        console.log(message);
        Toast.show({type: 'error', text1: 'Error', text2: message});
      });
    },
  });

  useEffect(() => {
    getFeaturedTherapist({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
