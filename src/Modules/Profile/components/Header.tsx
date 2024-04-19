import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Text, View} from 'react-native';
import {Fonts} from '../../../General/utils/constants';
import {useAuthContext} from '../../../General/context';

const Header = () => {
  const {user} = useAuthContext();
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../images/fimage1.png')}
          style={styles.image}
        />
      </View>
      <View>
        <Text
          style={styles.name}>{`${user?.firstname} ${user?.lastname}`}</Text>
        <View style={styles.editProfile}>
          <Text style={styles.edit}>Edit Profile</Text>
          <Image source={require('../../../images/AngleRightIcon.png')} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 36,
  },
  imageContainer: {
    height: 71,
    width: 70,
    borderRadius: 50,
    overflow: 'hidden',
    marginRight: 13,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  name: {
    fontFamily: Fonts.SEMI_BOLD,
    fontSize: 19,
    color: '#424242',
    marginBottom: 9,
  },
  editProfile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  edit: {
    fontFamily: Fonts.MEDIUM,
    fontSize: 15,
    color: '#7E7E7E',
    marginRight: 9,
  },
});

export default Header;
