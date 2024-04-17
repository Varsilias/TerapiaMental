import React from 'react';
import {
  Image,
  ImageProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors, Fonts} from '../../../General/utils/constants';

interface ItemProps {
  name: string;
  category: string;
  profileImage: ImageProps;
  rating: number | string;
}

const FeaturedTherapists = () => {
  const featuredTherapist: ItemProps[] = [
    {
      name: 'Adeola Eze',
      category: 'Clinical Psychologist',
      profileImage: require('../../../images/fimage3.png'),
      rating: 4.9,
    },
    {
      name: 'Chinedu Okoye',
      category: 'Marriage and Family Therapist',
      profileImage: require('../../../images/fimage2.png'),
      rating: 4.8,
    },
    {
      name: 'Fatima Ibrahim',
      category: 'Trauma Counselor',
      profileImage: require('../../../images/fimage1.png'),
      rating: 4.7,
    },
  ];

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
            name={item.name}
            profileImage={item.profileImage}
            rating={item.rating}
            key={item.name}
          />
        ))}
      </View>
    </View>
  );
};

const Item = ({name, category, profileImage, rating}: ItemProps) => (
  <TouchableOpacity style={styles.item} activeOpacity={0.8}>
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
