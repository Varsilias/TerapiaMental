import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Fonts} from '../../../General/utils/constants';
import {DropShadow} from '../../../General/components/DropShadow';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationType} from '../../../Navigation/types/navigation';

const Features = () => {
  const {width} = Dimensions.get('window');
  const navigation = useNavigation<StackNavigationType>();

  const features = [
    {
      id: 1,
      title: 'Easy Booking',
      icon: require('../../../images/EasyBookingIcon.png'),
      route: 'EasyBooking',
    },
    {
      id: 2,
      title: 'Secure Wallet',
      icon: require('../../../images/SecureWalletIcon.png'),
      route: 'SecureWallet',
    },
    {
      id: 3,
      title: 'Tailored Tools',
      icon: require('../../../images/TailoredToolsIcon.png'),
      route: 'TailoredTools',
    },
    {
      id: 4,
      title: 'Right Therapist',
      icon: require('../../../images/RightTherapistIcon.png'),
      route: 'RightTherapist',
    },
  ];

  return (
    <View style={styles.whyUsContainer}>
      <Text style={styles.headerText}>Why Choose TerapiaMental?</Text>
      <View style={styles.featureContainer}>
        {features.map(({id, icon, title, route}) => {
          return (
            <TouchableOpacity
              key={id}
              style={[styles.cardContainer]}
              activeOpacity={0.8}
              onPress={() => navigation.navigate(route)}>
              <DropShadow shadowDistance={5}>
                <View style={[styles.card, {width: width / 2 - 30}]}>
                  <Image source={icon} style={styles.image} />
                  <Text style={styles.title}>{title}</Text>
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
  whyUsContainer: {
    paddingHorizontal: 25,
    marginBottom: 15,
  },
  headerText: {
    fontFamily: Fonts.SEMI_BOLD,
    fontSize: 18,
    color: '#3C3C3C',
    marginBottom: 21,
  },
  featureContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
    width: '100%',
  },
  cardContainer: {
    width: '45%',
    marginBottom: 12,
    marginRight: 12,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginBottom: 21,
  },
  title: {
    fontFamily: Fonts.N_BOLD,
    fontSize: 14,
    color: '#2B2B2B',
  },
});

export default Features;
