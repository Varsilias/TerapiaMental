import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors, Fonts} from '../../../General/utils/constants';
import {StackNavigationType} from '../../../Navigation/types/navigation';
import {useNavigation} from '@react-navigation/native';

const Tools = () => {
  const {width} = Dimensions.get('window');
  const navigation = useNavigation<StackNavigationType>();
  const tools = [
    {
      title: 'Diary',
      description: 'Documents your thoughts securely',
      icon: require('../../../images/Diary.png'),
      route: 'CommingSoon',
    },
    {
      title: 'Breath Exercise',
      description: 'Reduce anxiety and panic attacks',
      icon: require('../../../images/BreatheExercise.png'),
      route: 'CommingSoon',
    },
    {
      title: 'Meditate',
      description: 'Guided Meditation Resources',
      icon: require('../../../images/Meditate.png'),
      route: 'CommingSoon',
    },
    {
      title: 'Community',
      description: 'Connect, Share, Support: Building Together',
      icon: require('../../../images/Community.png'),
      route: 'CommingSoon',
    },
    {
      title: 'Self-Care Planner',
      description: 'Your Guide to Self-Nurturing',
      icon: require('../../../images/Selfcare.png'),
      route: 'CommingSoon',
    },
    {
      title: 'Goal-Setting',
      description: 'Chart Your Course to Success',
      icon: require('../../../images/GoalSetting.png'),
      route: 'CommingSoon',
    },
  ];
  return (
    <ScrollView style={styles.container}>
      <View style={styles.featureContainer}>
        {tools.map(({icon, title, description, route}) => {
          return (
            <TouchableOpacity
              key={title}
              activeOpacity={0.8}
              style={styles.pressableContainer}
              onPress={() => navigation.navigate(route)}>
              <View style={[{width: width / 2 - 30}]}>
                <View style={styles.iconContainer}>
                  <Image source={icon} />
                </View>
                <View style={styles.title}>
                  <Text style={styles.titleText}>{title}</Text>
                  <Image
                    source={require('../../../images/AngleRightIcon.png')}
                  />
                </View>
                <Text style={styles.description}>{description}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 14,
    backgroundColor: Colors.WHITE,
  },
  featureContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginTop: 10,
    width: '100%',
  },
  iconContainer: {
    backgroundColor: '#005468',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
    height: 106,
    marginBottom: 11,
  },
  pressableContainer: {
    marginBottom: 31,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 7,
  },
  titleText: {
    fontFamily: Fonts.MEDIUM,
    fontSize: 16,
    color: '#373737',
  },
  description: {
    fontFamily: Fonts.N_REGULAR,
    fontSize: 13,
    color: '#373737',
  },
});
export default Tools;
