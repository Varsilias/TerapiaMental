import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Fonts} from '../../../General/utils/constants';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationType} from '../../../Navigation/types/navigation';
import {DropShadow} from '../../../General/components/DropShadow';

const ManageAccount = () => {
  const navigation = useNavigation<StackNavigationType>();
  const accountActions = [
    {
      title: 'My Wallet',
      icon: require('../../../images/WalletIcon.png'),
      route: 'CommingSoon',
    },
    {
      title: 'Notifications',
      icon: require('../../../images/BellIconColoured.png'),
      route: 'CommingSoon',
    },
    {
      title: 'Gift Therapy',
      icon: require('../../../images/GiftTherapyIcon.png'),
      route: 'CommingSoon',
    },
    {
      title: 'Appointment History',
      icon: require('../../../images/AppointmentHistoryIcon.png'),
      route: 'CommingSoon',
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Manage Account</Text>
      <View>
        {accountActions.map(({title, icon, route}) => {
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              key={title}
              onPress={() => navigation.navigate(route)}
              style={styles.touchable}>
              <DropShadow shadowDistance={4}>
                <View style={styles.itemContainer}>
                  {/* eslint-disable-next-line react-native/no-inline-styles */}
                  <View style={{flex: 1, marginRight: 21}}>
                    <Image source={icon} />
                  </View>
                  <Text style={styles.title}>{title}</Text>
                  {/* eslint-disable-next-line react-native/no-inline-styles */}
                  <View style={{flex: 1}}>
                    <Image
                      source={require('../../../images/AngleRightIcon.png')}
                    />
                  </View>
                </View>
              </DropShadow>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginBottom: 26,
  },
  touchable: {
    marginBottom: 24,
    borderRadius: 8,
  },
  headerText: {
    fontFamily: Fonts.SEMI_BOLD,
    fontSize: 19,
    color: '#3C3C3C',
    marginBottom: 22,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 25,
  },
  title: {
    flex: 12,
    fontFamily: Fonts.MEDIUM,
    fontSize: 16,
    color: '#373737',
  },
});

export default ManageAccount;
