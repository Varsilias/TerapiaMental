import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Item, ItemProps} from '../../Home/components/FeatureStories';
import {Colors} from '../../../General/utils/constants';

const TherapistReviews = () => {
  const featuredTherapist: ItemProps[] = [
    {
      name: 'Sarah Johnson',
      location: 'Lagos, Nigeria',
      profileImage: require('../../../images/fimage3.png'),
      text: "I've struggled with anxiety for years, but TerapiaMental has been a lifesaver. The therapists are incredible, and the tools provided have helped me manage my symptoms better than ever before. Highly recommend!",
    },
    {
      name: 'Ahmed Abdullahi',
      location: 'Abuja, Nigeria',
      profileImage: require('../../../images/fimage2.png'),
      text: 'As a busy professional, finding time for therapy was challenging. TerapiaMental made it easy. The wallet feature streamlined payments, and the therapist I connected with truly understood my needs. Great app!',
    },
    {
      name: 'David Okonkwo',
      location: 'Port Harcourt, Nigeria',
      profileImage: require('../../../images/fimage1.png'),
      text: "I've tried other therapy apps, but TerapiaMental stands out. The therapist matching process was spot on, and the resources available have been invaluable on my mental health journey. Thank you for creating such a fantastic app!",
    },
  ];
  return (
    <ScrollView>
      <View style={styles.container}>
        {featuredTherapist.map(item => (
          <Item
            location={item.location}
            name={item.name}
            profileImage={item.profileImage}
            text={item.text}
            key={item.name}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 25,
    backgroundColor: Colors.WHITE,
  },
});

export default TherapistReviews;
