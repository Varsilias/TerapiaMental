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
import {useNavigation} from '@react-navigation/native';
import {StackNavigationType} from '../../../Navigation/types/navigation';
import Toast from 'react-native-toast-message';
import {handleError} from '../../../General/utils/helpers';
import {useGetFeaturedTherapists} from '../hooks';

export interface ItemProps {
  name: string;
  firstname?: string;
  lastname?: string;
  category: string;
  profileImage?: any;
  // profileImage?: ImageProps | {uri: string};
  profile_image?: any;
  // profile_image?: ImageProps | {uri: string};
  rating: number | string;
  id?: any;
}

const FeaturedTherapists = () => {
  const navigation = useNavigation<StackNavigationType>();
  const [featuredTherapist, setFeaturedTherapist] = useState<Array<ItemProps>>(
    [],
  );

  const {mutate: getFeaturedTherapist} = useGetFeaturedTherapists({
    onSuccess(res) {
      const data = res?.data;
      console.log(JSON.stringify(data, null, 2));
      setFeaturedTherapist(data);
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
      <View style={styles.featureHeaderContainer}>
        <View>
          <Text style={styles.quoteHeader}>Featured Therapists</Text>
          <Text style={styles.quoteSubHeader}>
            Highlighted experts in mental wellness
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Browse Therapist')}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{flexDirection: 'row', marginTop: 10}}
          activeOpacity={0.8}>
          <Text style={styles.seeAll}>See all</Text>
          <Image source={require('../../../images/ArrowRightIcon.png')} />
        </TouchableOpacity>
      </View>
      <View>
        {featuredTherapist.map(item => (
          <Item
            category={item.category}
            name={`${item.firstname} ${item.lastname}`}
            profileImage={{uri: item.profile_image}}
            rating={item.rating}
            key={`${item.firstname}-${item.category}`}
            id={item.id}
          />
        ))}
      </View>
    </View>
  );
};

export const Item = ({
  name,
  category,
  profileImage,
  rating,
  ...rest
}: ItemProps) => {
  const navigation = useNavigation<StackNavigationType>();

  return (
    <TouchableOpacity
      style={styles.item}
      activeOpacity={0.8}
      onPress={() => navigation.navigate('TherapistProfile', {id: rest.id})}>
      <Image source={profileImage} style={styles.image} />
      <View style={styles.title}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.category}>{category}</Text>
      </View>

      <View style={styles.rating}>
        <Image source={require('../../../images/RatingIcon.png')} />
        <Text style={styles.ratingCount}>{rating}</Text>
      </View>
    </TouchableOpacity>
  );
};

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
    marginBottom: 20,
  },
  seeAll: {
    fontFamily: Fonts.REGULAR,
    fontSize: 12,
    color: Colors.T_LIGHT_GREY,
    marginRight: 10,
  },
  item: {
    paddingHorizontal: 16,
    paddingVertical: 11,
    flexDirection: 'row',
    backgroundColor: '#EEEEEE',
    marginBottom: 25,
    alignItems: 'center',
    borderRadius: 5,
  },
  image: {
    height: 54,
    width: 55,
    borderRadius: 8,
    flex: 2.5,
    marginRight: 16,
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
});

export default FeaturedTherapists;
