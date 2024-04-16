import React, {useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Colors, Fonts} from '../../../General/utils/constants';
import AppIntroSlider from 'react-native-app-intro-slider';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationType} from '../../../Navigation/types/navigation';

const slides = [
  {
    key: 1,
    title: 'Welcome to TerapiaMental',
    text: 'Your mental well-being\n companion. Book therapists, \n access tools, and resources easily.',
    image: require('../../../images/Intro-1.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Find Your Perfect Therapist',
    text: 'Find trusted therapists, rated by\n users. Start your mental health\n journey confidently.',
    image: require('../../../images/Intro-2.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Simplify Your Booking Experience',
    text: 'Simplify bookings with a secure\n wallet. Fund, manage, and prioritize\n your well-being seamlessly.',
    image: require('../../../images/Intro-3.png'),
    backgroundColor: '#22bcb5',
  },
  {
    key: 4,
    title: 'Create an Account',
    text: 'Join TerapiaMental for personalized \nmental health support. Create your\n account now to get started.',
    image: require('../../../images/Intro-4.png'),
    backgroundColor: '#22bcb5',
  },
];

const IntroWrapper = () => {
  const ref = useRef<any>(null);
  const navigation = useNavigation<StackNavigationType>();

  const onNext = (index: number) => {
    return ref.current?.goToSlide(index);
  };

  const onSkip = () => {
    return ref.current?.goToSlide(slides.length - 1);
  };

  const handleNavigation = () => {
    navigation.navigate('Signup');
  };

  const renderSlides = ({
    item,
    index,
  }: {
    item: Record<string, any>;
    index: number;
  }) => {
    return (
      <ScrollView style={styles.introContainer}>
        <View style={styles.skipActionsContainer}>
          {index === slides.length - 1 ? null : (
            <TouchableOpacity onPress={onSkip} activeOpacity={0.7}>
              <Text style={styles.skipActions}>Skip</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.image} />
        </View>
        <View style={styles.text}>
          <Text style={styles.heading}>{item.title}</Text>
          <Text style={styles.info}>{item.text}</Text>
        </View>
        <View style={styles.test}>
          {Array.from({length: slides.length}).map((_, i) => {
            return index === i ? (
              <View style={styles.test2} key={i} />
            ) : (
              <View style={styles.test1} key={i} />
            );
          })}
        </View>
        <View style={styles.buttonView}>
          {!(index === slides.length - 1) ? (
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => onNext(index + 1)}
              activeOpacity={0.7}>
              <Image source={require('../../../images/Arrow.png')} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.button}
              onPress={handleNavigation}
              activeOpacity={0.7}>
              <Text style={styles.btn_text}>Sign Up</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    );
  };
  return (
    <AppIntroSlider
      ref={ref}
      data={slides}
      renderItem={renderSlides}
      showNextButton={false}
      showPrevButton={false}
      renderPagination={() => {
        return null;
      }}
    />
  );
};

const styles = StyleSheet.create({
  introContainer: {
    backgroundColor: Colors.WHITE,
    flex: 1,
    paddingTop: Platform.OS !== 'android' ? 40 : 0,
  },
  skipActionsContainer: {
    alignItems: 'flex-end',
    width: '100%',
    paddingHorizontal: 25,
    marginBottom: 98,
  },
  skipActions: {
    fontSize: 21,
    fontFamily: Fonts.REGULAR,
    color: Colors.PRIMARY_BLACK,
    marginTop: 20,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 46,
  },

  image: {
    width: Platform.OS === 'android' ? 200 : 300,
    height: Platform.OS === 'android' ? 200 : 300,
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 64,
  },
  heading: {
    fontFamily: Fonts.SEMI_BOLD,
    fontSize: Platform.OS === 'android' ? 20 : 23,
    color: Colors.PRIMARY_BLACK,
    marginBottom: 20,
  },
  info: {
    fontFamily: Fonts.REGULAR,
    fontSize: 17,
    color: Colors.PRIMARY_BLACK,
    // marginHorizontal: 54,
    textAlign: 'center',
  },
  buttonView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
    // backgroundColor: 'red',
  },
  touchable: {
    backgroundColor: Colors.TEAL,
    height: 55,
    width: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    overflow: 'hidden',
    marginBottom: 10,
  },
  button: {
    width: '100%',
    backgroundColor: Colors.TEAL,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    overflow: 'hidden',
    height: 55,
  },

  btn_text: {
    color: Colors.WHITE,
    fontFamily: Fonts.SEMI_BOLD,
    fontSize: 19,
  },
  test: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
    marginBottom: 56,
  },
  test1: {
    backgroundColor: Colors.WHITE,
    height: 9,
    width: 9,
    overflow: 'hidden',
    borderColor: Colors.TEAL,
    borderWidth: 1.5,
    borderRadius: 100,
    marginRight: 4,
  },
  test2: {
    backgroundColor: Colors.TEAL,
    height: 8,
    width: 19,
    overflow: 'hidden',
    borderRadius: 10,
    marginRight: 4,
  },
});

export default IntroWrapper;
