import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Colors, Fonts} from '../../../General/utils/constants';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationType} from '../../../Navigation/types/navigation';

const ProfileImage = () => {
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
          <Text style={styles.backText}>Therapist Profile</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <Image source={require('../../../images/ProfileImage.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#005468',
    height: Platform.OS === 'android' ? 100 : 150,
    paddingLeft: 25,
    paddingTop: Platform.OS === 'android' ? 20 : 70,
    marginBottom: 100,
  },
  imageContainer: {
    height: 122,
    width: 122,
    overflow: 'hidden',
    borderRadius: 50,
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
export default ProfileImage;
