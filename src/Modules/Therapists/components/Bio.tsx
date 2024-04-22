import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors, Fonts} from '../../../General/utils/constants';
import {StackNavigationType} from '../../../Navigation/types/navigation';
import {useNavigation} from '@react-navigation/native';

const Bio = () => {
  const navigation = useNavigation<StackNavigationType>();

  const summary = [
    {title: 'Patients', value: '50+'},
    {title: 'Experience', value: '4 years'},
    {title: 'Rating', value: '4.7'},
  ];

  const specialties = [
    'Depression Therapist',
    'Psychoeducation',
    'Mindfulness-Based Cognitive Therapy',
    'Depression Therapist',
    'Interpersonal Therapy',
  ];
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.headerText}>About</Text>
        <View style={styles.itemContainer}>
          {summary.map(({title, value}, index) => {
            return <BioSummaryItem title={title} value={value} index={index} />;
          })}
        </View>
        {/* eslint-disable-next-line react-native/no-inline-styles */}
        <View style={{marginBottom: 20}}>
          <Text style={styles.bioText}>
            Chinedu Ibrahim is a dedicated Couples Therapist known for his
            compassionate approach and expertise in helping couples navigate
            relationship challenges. With years of experience, he specializes in
            fostering open communication, resolving conflicts, and strengthening
            emotional bonds between partners. Chinedu is committed to guiding
            couples towards healthier, happier relationships through tailored
            therapy sessions that address their unique needs and goals.
          </Text>
        </View>
        <View>
          <Text style={styles.headerText}>Specialities</Text>
        </View>
        <View style={styles.specialtiesContainer}>
          {specialties.map(title => {
            return <SpecialtiesItem title={title} />;
          })}
        </View>
        <View style={styles.bookAgainContainer}>
          <TouchableOpacity
            style={[styles.bookAgainBtn]}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('BookSession', {id: 10})}>
            <Text
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                color: Colors.WHITE,
                fontFamily: Fonts.MEDIUM,
                fontSize: 14,
                textAlign: 'center',
              }}>
              Book Session
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const BioSummaryItem = ({
  title,
  value,
  index,
}: {
  title: string;
  value: string;
  index: number;
}) => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={[styles.bioItemContainer, index === 2 && {marginRight: 0}]}
      key={index}>
      <Text style={styles.itemTitle}>{title}</Text>
      <View style={styles.itemValueContainer}>
        {index === 2 && (
          <Image
            source={require('../../../images/RatingIcon.png')}
            style={styles.ratingIcon}
          />
        )}
        <Text style={styles.itemValue}>{value}</Text>
      </View>
    </View>
  );
};

const SpecialtiesItem = ({title}: {title: string}) => {
  return (
    <View style={styles.specialtiesItem}>
      <Text style={styles.specialtiesText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 25,
    paddingBottom: 50,
  },
  headerText: {
    marginBottom: 30,
    fontFamily: Fonts.SEMI_BOLD,
    fontSize: 18,
    color: '#3C3C3C',
  },
  bioItemContainer: {
    backgroundColor: '#A9D7CC',
    paddingHorizontal: 17,
    paddingVertical: 13,
    width: 99,
    justifyContent: 'center',
    flex: 1,
    marginRight: 23,
    borderRadius: 7,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 22,
  },
  itemTitle: {
    fontFamily: Fonts.N_MEDIUM,
    fontSize: 13,
    color: '#3c3c3cb9',
    marginBottom: 9,
  },
  itemValue: {
    fontFamily: Fonts.MEDIUM,
    fontSize: Platform.OS === 'android' ? 17 : 19,
    color: '#2C2C2C',
  },
  itemValueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingIcon: {
    marginRight: 7,
  },
  bioText: {
    fontFamily: Fonts.MEDIUM,
    lineHeight: 27,
    fontSize: 16,
    color: '#5D6B67',
  },
  specialtiesItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#7E7E7E',
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 15,
  },
  specialtiesText: {
    fontFamily: Fonts.MEDIUM,
    fontSize: 14,
    color: '#7E7E7E',
  },
  specialtiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  bookAgainBtn: {
    paddingVertical: 16,
    borderRadius: 7,
    backgroundColor: '#005468',
    marginTop: 10,
    justifyContent: 'center',
    width: '100%',
  },
  bookAgainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Bio;
