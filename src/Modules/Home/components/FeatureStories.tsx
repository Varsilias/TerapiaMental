import React, {useEffect, useState} from 'react';
import {
  Image,
  // ImageProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors, Fonts} from '../../../General/utils/constants';
import {DropShadow} from '../../../General/components/DropShadow';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationType} from '../../../Navigation/types/navigation';
import {useGetFeaturedReviews} from '../hooks';
import {handleError} from '../../../General/utils/helpers';
import Toast from 'react-native-toast-message';

export interface ItemProps {
  name: string;
  location: string;
  // profileImage: ImageProps;
  profileImage: any;
  text: any;
  review?: string;
  profile_image?: any;
}

const FeaturedStories = () => {
  const navigation = useNavigation<StackNavigationType>();
  const [stories, setStories] = useState<ItemProps[]>([]);

  const {mutate: getFeaturedReviews} = useGetFeaturedReviews({
    onSuccess(res) {
      const data = res?.data;
      console.log(JSON.stringify(data, null, 2));
      setStories(data);
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
    getFeaturedReviews({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.featureHeaderContainer}>
        <View>
          <Text style={styles.quoteHeader}>Client Stories</Text>
          <Text style={styles.quoteSubHeader}>
            Real Experiences: Hear From Our Users
          </Text>
        </View>
        <TouchableOpacity
          // eslint-disable-next-line react-native/no-inline-styles
          style={{flexDirection: 'row', marginTop: 10}}
          onPress={() => navigation.navigate('ClientStories')}
          activeOpacity={0.8}>
          <Text style={styles.seeAll}>See all</Text>
          <Image source={require('../../../images/ArrowRightIcon.png')} />
        </TouchableOpacity>
      </View>
      <View>
        {stories.map(item => (
          <Item
            location={item.location}
            name={item.name}
            profileImage={{uri: item.profile_image}}
            text={item.review}
            key={item.review}
            itemKey={`${item.review}`}
          />
        ))}
      </View>
    </View>
  );
};

export const Item = ({
  name,
  location,
  profileImage,
  text,
  itemKey,
}: ItemProps & {itemKey: string | number}) => (
  <DropShadow key={itemKey}>
    <View style={styles.item} key={itemKey}>
      <Image source={profileImage} style={styles.image} />
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.category}>{location}</Text>
    </View>
  </DropShadow>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
  },

  quoteHeader: {
    fontFamily: Fonts.SEMI_BOLD,
    fontSize: 18,
    color: '#3C3C3C',
  },

  quoteSubHeader: {
    fontFamily: Fonts.REGULAR,
    fontSize: 13,
    color: Colors.T_LIGHT_GREY,
    marginBottom: 21,
  },
  featureHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  seeAll: {
    fontFamily: Fonts.REGULAR,
    fontSize: 12,
    color: Colors.T_LIGHT_GREY,
    marginRight: 10,
  },
  item: {
    paddingHorizontal: 31,
    paddingTop: 60,
    backgroundColor: Colors.WHITE,
    marginBottom: 55,
    alignItems: 'center',
    borderRadius: 5,
    height: 250,
    position: 'relative',
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 50,
    flex: 2.5,
    marginRight: 16,
    position: 'absolute',
    top: -25,
  },
  title: {flex: 9},
  rating: {flex: 1},
  name: {
    fontFamily: Fonts.MEDIUM,
    fontSize: 17,
    color: '#373737',
    marginBottom: 5,
  },
  category: {
    fontFamily: Fonts.N_REGULAR,
    fontSize: 13,
    color: '#373737',
  },
  ratingCount: {
    fontFamily: Fonts.N_EXTRA_BOLD_ITALIC,
    fontSize: 16,
    color: '#373737',
    marginTop: 8,
  },
  text: {
    fontFamily: Fonts.N_REGULAR,
    textAlign: 'center',
    marginBottom: 19,
    fontSize: 13,
    color: '#373737',
  },
});

export default FeaturedStories;
