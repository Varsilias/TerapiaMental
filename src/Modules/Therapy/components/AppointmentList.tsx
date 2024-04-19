import React, {useEffect, useMemo, useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  FlatList,
} from 'react-native';
import {Colors, Fonts} from '../../../General/utils/constants';

export interface AppointmentProps {
  name: string;
  category: string;
  date: string;
  time: string;
  status: 'Confirmed' | 'Completed' | 'Cancelled' | string;
}
const AppointmentList = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentActiveTab, setCurrentActiveTab] = useState({
    title: 'Upcoming',
    value: 'Confirmed',
  });
  const appointmentTabs = useMemo(
    () => [
      {title: 'Upcoming', value: 'Confirmed'},
      {title: 'Completed', value: 'Completed'},
      {title: 'Cancelled', value: 'Cancelled'},
    ],
    [],
  );

  const appointments: AppointmentProps[] = [
    {
      name: 'Chinedu Ibrahim',
      category: 'Couples Therapist',
      date: '03/04/2024',
      time: '12:00 PM',
      status: 'Confirmed',
    },
    {
      name: 'Somtochukwu Ogbu',
      category: 'Marriage Counselor',
      date: '20/06/2024',
      time: '02:00 PM',
      status: 'Completed',
    },
    {
      name: 'Okechukwu Onyeike',
      category: 'Behavioural Therapist',
      date: '03/003/2024',
      time: '10:00 PM',
      status: 'Cancelled',
    },
    {
      name: 'Ngozi Onwuka',
      category: 'Grief Counselor',
      date: '10/04/2024',
      time: '01:00 PM',
      status: 'Confirmed',
    },
    {
      name: 'Uchechi Eze',
      category: 'Career Counselor',
      date: '29/04/2024',
      time: '10:00 AM',
      status: 'Confirmed',
    },
  ];

  useEffect(() => {
    const currentTab = appointmentTabs.find((_, index) => index === activeTab);
    if (currentTab) {
      setCurrentActiveTab(currentTab);
    }
  }, [activeTab, appointmentTabs, currentActiveTab]);

  return (
    <View style={styles.container}>
      <View style={styles.tabcontainer}>
        {appointmentTabs.map(({title}, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.tabItem, index === activeTab && styles.tabActive]}
            onPress={() => setActiveTab(index)}
            activeOpacity={1}>
            <Text
              style={[styles.title, index === activeTab && styles.textActive]}>
              {title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={appointments.filter(
          ({status}) => status === currentActiveTab.value,
        )}
        renderItem={({item}) => <Appointment {...item} />}
        keyExtractor={item => `${item.date}-${item.time}`}
      />
    </View>
  );
};

const Appointment = ({
  category,
  date,
  name,
  status,
  time,
}: AppointmentProps) => {
  return (
    <View style={styles.appointmentContainer}>
      {/* Therapist Info */}
      <View style={styles.therapistInfoContainer}>
        <View style={styles.therapistImage}>
          <Image
            source={require('../../../images/fimage1.png')}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{width: '100%', height: '100%'}}
          />
        </View>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.category}>{category}</Text>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 11,
            }}>
            <Image
              source={require('../../../images/VideoIcon.png')}
              style={[
                styles.videoIcon,
                // eslint-disable-next-line react-native/no-inline-styles
                status === 'Cancelled' && {tintColor: '#46A4BC'},
              ]}
            />
            <Text
              style={[
                styles.callMedium,
                // eslint-disable-next-line react-native/no-inline-styles
                status === 'Cancelled' && {color: '#46A4BC'},
              ]}>
              Video Call
            </Text>
          </View>
        </View>
      </View>
      {/* Time and Date */}
      <View style={styles.scheduleContainer}>
        <View style={styles.scheduleItem}>
          <Image
            source={require('../../../images/CalendarIcon.png')}
            style={styles.icons}
          />
          <Text style={styles.text}>{date}</Text>
        </View>
        <View style={styles.scheduleItem}>
          <Image
            source={require('../../../images/TimeIcon.png')}
            style={styles.icons}
          />
          <Text style={styles.text}>{time}</Text>
        </View>
        <View style={styles.scheduleItem}>
          <Image
            source={require('../../../images/StatusIcon.png')}
            style={[
              styles.icons,
              // eslint-disable-next-line react-native/no-inline-styles
              status === 'Cancelled' && {tintColor: '#BF1D1D'},
            ]}
          />
          <Text style={styles.text}>{status}</Text>
        </View>
      </View>
      {status === 'Confirmed' ? (
        <View style={styles.actionBtnContainer}>
          <TouchableOpacity style={styles.cancelBtn}>
            <Text
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                color: '#005468',
                fontFamily: Fonts.MEDIUM,
                fontSize: 14,
              }}>
              Cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bookBtn}>
            <Text
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                color: Colors.WHITE,
                fontFamily: Fonts.MEDIUM,
                fontSize: 14,
              }}>
              Reschedule
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.bookAgainContainer}>
          <TouchableOpacity style={[styles.bookAgainBtn]}>
            <Text
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                color: Colors.WHITE,
                fontFamily: Fonts.MEDIUM,
                fontSize: 14,
                textAlign: 'center',
              }}>
              Book Again
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingBottom: 150,
  },
  tabcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
    backgroundColor: '#0d79912e',
    marginBottom: 19,
  },
  title: {
    fontFamily: Fonts.SEMI_BOLD,
    fontSize: 14,
    color: '#7E7E7E',
  },
  tabItem: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  textActive: {
    color: Colors.WHITE,
  },
  tabActive: {
    backgroundColor: '#0D7891',
  },
  appointmentContainer: {
    paddingHorizontal: 18,
    paddingVertical: 23,
    borderRadius: 5,
    marginBottom: 19,
    borderWidth: 1,
    borderColor: Colors.INPUT_BORDER_GREY,
  },
  therapistInfoContainer: {
    flexDirection: 'row',
    // alignItems: 'center'
    borderBottomWidth: 1,
    paddingBottom: 17,
    borderBottomColor: '#E2E2E2',
    marginBottom: 16,
  },
  therapistImage: {
    height: 76,
    width: 77,
    borderRadius: 7,
    marginRight: 15,
  },
  name: {
    fontFamily: Fonts.SEMI_BOLD,
    fontSize: 19,
    color: '#373737',
    marginBottom: 5,
  },
  category: {
    fontFamily: Fonts.N_MEDIUM,
    fontSize: 14,
    color: '#373737',
  },
  videoIcon: {
    marginRight: 8,
  },
  callMedium: {
    fontFamily: Fonts.SEMI_BOLD,
    fontSize: 13,
    color: '#34A853',
  },

  scheduleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 17,
  },
  scheduleItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icons: {
    marginRight: 8,
  },
  text: {
    fontFamily: Fonts.N_MEDIUM,
    fontSize: 14,
    color: '#373737',
  },
  actionBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelBtn: {
    paddingHorizontal: 39,
    paddingVertical: 13,
    borderRadius: 5,
    backgroundColor: '#0d79912e',
  },
  bookBtn: {
    paddingHorizontal: 47,
    paddingVertical: 14,
    borderRadius: 7,
    backgroundColor: '#0D7891',
  },
  bookAgainBtn: {
    paddingVertical: 16,
    borderRadius: 7,
    backgroundColor: '#0D7891',
    marginTop: 10,
    justifyContent: 'center',
    width: '100%',
  },
  bookAgainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppointmentList;
