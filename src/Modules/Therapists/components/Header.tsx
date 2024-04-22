import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationType} from '../../../Navigation/types/navigation';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors, Fonts} from '../../../General/utils/constants';

const Header = () => {
  const navigation = useNavigation<StackNavigationType>();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          navigation.goBack();
        }}>
        <View style={styles.backContainer}>
          <Image source={require('../../../images/AngleLeftIcon.png')} />
          <Text style={styles.backText}>Book Session</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#005468',
    paddingLeft: 25,
    paddingTop: Platform.OS === 'android' ? 20 : 70,
    marginBottom: 25,
  },

  backContainer: {
    flexDirection: 'row',
    paddingBottom: 30,
    alignItems: 'center',
  },
  backText: {
    fontFamily: Fonts.SEMI_BOLD,
    fontSize: 18,
    color: Colors.WHITE,
    marginLeft: 25,
  },
});

export default Header;
