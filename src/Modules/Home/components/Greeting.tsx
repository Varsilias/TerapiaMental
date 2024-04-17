import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Fonts, Colors} from '../../../General/utils/constants';
import {useAuthContext} from '../../../General/context';

const Greeting = () => {
  const {user} = useAuthContext();
  return (
    <View style={styles.greetingContainer}>
      <View style={styles.profileImage}>
        <Text>D</Text>
      </View>
      <View style={styles.complimentContainer}>
        <Text style={styles.greeting}>Good morning</Text>
        <Text
          style={styles.name}>{`${user?.firstname} ${user?.lastname}`}</Text>
      </View>
      <View style={styles.notification}>
        <Image source={require('../../../images/BellIcon.png')} />
        <View style={styles.notificationCount}>
          <Text
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              fontFamily: Fonts.N_SEMI_BOLD,
              fontSize: 9,
              color: Colors.WHITE,
            }}>
            4
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  greetingContainer: {
    marginHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },
  profileImage: {
    width: 43,
    height: 43,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 1,
    overflow: 'hidden',
    marginRight: 10,
    // flex: 1,
  },

  name: {
    fontFamily: Fonts.SEMI_BOLD,
    fontSize: 16,
    color: '#424242',
  },
  greeting: {
    fontFamily: Fonts.REGULAR,
    fontSize: 13,
    color: Colors.T_LIGHT_GREY,
  },
  notification: {
    flex: 1,
    position: 'relative',
    // backgroundColor: 'red',
    padding: 10,
  },
  complimentContainer: {
    flex: 12,
  },
  notificationCount: {
    width: 16,
    height: 16,
    backgroundColor: '#F55858',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    position: 'absolute',
    right: 6,
    top: 0,
  },
});

export default Greeting;
