import React from 'react';
import {View, Platform, StyleSheet, ScrollView} from 'react-native';
import Header from './Header';
import {Colors} from '../../../General/utils/constants';
import ManageAccount from './ManageAccount';
import ContactUs from './ContactUs';
import More from './More';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <ManageAccount />
        <ContactUs />
        <More />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS !== 'android' ? 80 : 20,
    paddingBottom: 50,
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
});

export default Profile;
