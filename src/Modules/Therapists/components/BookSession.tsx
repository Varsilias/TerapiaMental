import {RouteProp, useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Image,
} from 'react-native';
import {StackNavigationType} from '../../../Navigation/types/navigation';
import Header from './Header';
import {Colors, Fonts} from '../../../General/utils/constants';
import {Formik, FormikProps} from 'formik';
import {DatePickerInput, TimePickerModal} from 'react-native-paper-dates';
import {date as dayjs} from '../../../General/utils/date';
import {FormikTextInput} from '../../../General/components/FormikTextInput';
import {bookSessionValidationSchema} from '../validation-schema';
import {DropShadow} from '../../../General/components/DropShadow';
import Toast from 'react-native-toast-message';

const BookSession = ({
  route,
}: {
  navigation: StackNavigationType;
  route: RouteProp<Record<string, any>>;
}) => {
  const params = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [actionSuccessModal, setActionSuccessModal] = useState(false);
  const navigation = useNavigation<StackNavigationType>();

  console.log('Therapist ID Book Session', params);
  const formikRef = useRef<FormikProps<any>>();
  const [visible, setVisible] = React.useState(false);
  const [payload, setPayload] = useState<{
    hours?: string;
    minutes?: string;
    date?: string | Date;
    noOfHours?: string;
  }>({
    hours: '',
    minutes: '',
    date: '',
    noOfHours: '1',
  });
  const [timeInterval, setTimeInterval] = useState({
    startTime: '',
    endTime: '',
  });

  const onDismiss = React.useCallback(() => {
    formikRef?.current?.setFieldTouched('time', true);
    setVisible(false);
  }, [setVisible]);

  const onConfirm = React.useCallback(
    ({hours, minutes}: {hours: number; minutes: number}) => {
      setVisible(false);
      formikRef?.current?.setFieldTouched('time', true);
      setPayload(prev => ({
        ...prev,
        hours: String(hours),
        minutes: String(minutes),
      }));
    },
    [setVisible],
  );

  useEffect(() => {
    if (!payload.hours || !payload.minutes) {
      return;
    }

    const {hours, minutes, noOfHours} = payload;
    const startHour = Number(hours);
    const endHour = Number(hours) + Number(noOfHours);

    const startAmOrPm = startHour > 11 ? 'PM' : 'AM';
    const endAmOrPm = endHour > 11 ? 'PM' : 'AM';
    const formattedMinute = Number(minutes) > 9 ? minutes : `0${minutes}`;

    const startTime = `${
      startHour % 12 || 12
    }:${formattedMinute} ${startAmOrPm}`;
    const endTime = `${endHour % 12 || 12}:${formattedMinute} ${endAmOrPm}`;

    setTimeInterval({startTime: startTime, endTime: endTime});
    formikRef?.current?.setFieldValue('time', `${startTime} - ${endTime}`);

    console.log(startTime, endTime);
  }, [payload]);

  const initialValues = {
    date: '',
    time: '',
    hours: '1',
  };

  const unAvailableDates = [
    dayjs().add(1, 'day').toDate(),
    dayjs().add(3, 'days').toDate(),
    dayjs().add(5, 'days').toDate(),
    dayjs().add(7, 'days').toDate(),
    dayjs().add(8, 'days').toDate(),
    dayjs().add(9, 'days').toDate(),
    dayjs().add(13, 'days').toDate(),
    dayjs().add(17, 'days').toDate(),
    dayjs().add(30, 'days').toDate(),
    dayjs().add(28, 'days').toDate(),
    dayjs().add(11, 'days').toDate(),
  ];

  const validateForm = (errors: any) => {
    console.log('errors', formikRef?.current?.errors);

    const errorFields = formikRef?.current?.errors ?? errors;

    if (Object.keys(errorFields).length > 0) {
      for (const field in errorFields) {
        formikRef?.current?.setFieldTouched(field, true);
      }
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please fill all required field',
      });
      return;
    }
    setModalVisible(true);
  };

  return (
    <View>
      <Header />
      <View style={styles.headerView}>
        <Text style={styles.headerText}>
          Book a Session with Obinna Nwachukwu
        </Text>
        <Text style={styles.supportText}>
          Select an available date to continue
        </Text>
      </View>
      <ScrollView>
        <View>
          <Formik
            validateOnMount={true}
            innerRef={formikRef as any}
            initialValues={initialValues}
            validationSchema={bookSessionValidationSchema}
            enableReinitialize={true}
            onSubmit={(values: any) => {
              console.log(
                JSON.stringify({...values, ...timeInterval}, null, 2),
              );
            }}>
            {({
              handleSubmit,
              getFieldMeta,
              values,
              setFieldValue,
              setFieldTouched,
              errors,
              setTouched,
            }) => {
              const getMeta = (field: string) => {
                return getFieldMeta(field);
              };

              const dateMeta = getMeta('date');
              const timeMeta = getMeta('time');
              return (
                <View style={styles.formItemContainer}>
                  <View style={[styles.viewContainer]}>
                    <Text style={[styles.label]}>Select Date</Text>
                    <DatePickerInput
                      locale="en-GB"
                      mode="flat"
                      editable={false}
                      presentationStyle="pageSheet"
                      endYear={new Date().getFullYear()}
                      validRange={{
                        disabledDates: unAvailableDates,
                        startDate: dayjs().toDate(),
                      }}
                      calendarIcon="calendar"
                      inputMode={'start'}
                      onChange={(date: Date | undefined) => {
                        formikRef?.current?.setFieldTouched('date', true);
                        formikRef?.current?.setFieldValue('date', date ?? '');
                        setPayload(prev => ({...prev, date: date ?? ''}));
                      }}
                      value={values?.date}
                      startYear={dayjs().year()}
                      hasError={dateMeta.touched && Boolean(dateMeta.error)}
                    />
                    {dateMeta.touched && dateMeta.error ? (
                      <Text style={styles.error}>{dateMeta.error}</Text>
                    ) : null}
                  </View>

                  <View style={[styles.viewContainer]}>
                    <Text style={[styles.label]}>Select Time</Text>
                    <View style={styles.chooseTimeContainer}>
                      <TouchableOpacity
                        style={[styles.chooseTimeBtn]}
                        activeOpacity={0.8}
                        onPress={() => setVisible(true)}>
                        <Text
                          // eslint-disable-next-line react-native/no-inline-styles
                          style={{
                            color: Colors.TEAL,
                            fontFamily: Fonts.MEDIUM,
                            fontSize: 14,
                            textAlign: 'center',
                          }}>
                          Choose a Time Slot
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <TimePickerModal
                      locale="en-GB"
                      use24HourClock={true}
                      visible={visible}
                      onDismiss={onDismiss}
                      onConfirm={onConfirm}
                      hours={12}
                      minutes={14}
                    />
                    {timeMeta.touched && timeMeta.error ? (
                      <Text style={styles.error}>{timeMeta.error}</Text>
                    ) : null}
                  </View>

                  <View style={[styles.viewContainer]}>
                    <FormikTextInput
                      name="hours"
                      label="No of Hours"
                      keyboardType="number-pad"
                      autoCapitalize="none"
                      enterKeyHint="done"
                      returnKeyLabel="done"
                      onSubmitEditing={() => handleSubmit()}
                      onChangeText={text => {
                        setPayload(prev => ({...prev, noOfHours: text}));
                        setFieldTouched('hours', true);
                        setFieldValue('hours', text);
                      }}
                    />
                  </View>

                  <View style={[styles.viewContainer, styles.selected]}>
                    <Text style={styles.headerText}>Selected Date & Time</Text>
                    <Text style={styles.supportText}>
                      When you select a data and time, it will appear here
                    </Text>
                    <View style={styles.selectedRangeContainer}>
                      <Text style={[styles.selectedRangeItem]}>
                        {payload.date
                          ? `Date: ${dayjs(payload?.date).format(
                              'dddd MMM Do, YYYY',
                            )}`
                          : null}
                      </Text>
                      <Text style={[styles.selectedRangeItem]}>
                        {timeInterval.endTime && timeInterval.startTime
                          ? `Time: ${timeInterval.startTime} to ${timeInterval.endTime}`
                          : null}
                      </Text>
                    </View>
                  </View>

                  <View
                    style={[styles.viewContainer, styles.bookAgainContainer]}>
                    <TouchableOpacity
                      style={[styles.bookAgainBtn]}
                      activeOpacity={0.8}
                      onPress={() => {
                        const touchedFields: Record<string, any> = {};

                        // Set each field in initialValues as touched
                        Object.keys(initialValues).forEach((field: string) => {
                          touchedFields[field] = true;
                        });
                        setTouched(touchedFields);
                        validateForm(errors);
                      }}>
                      <Text
                        // eslint-disable-next-line react-native/no-inline-styles
                        style={{
                          color: Colors.WHITE,
                          fontFamily: Fonts.MEDIUM,
                          fontSize: 19,
                          textAlign: 'center',
                        }}>
                        {isSubmitting ? 'Booking...' : 'Book Session'}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
          </Formik>
        </View>
      </ScrollView>
      {/* Confirm Action Modal */}
      <View style={styles.centeredView}>
        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => {
            setModalVisible(false);
          }}>
          <View style={styles.modalItemCenteredView}>
            <View style={styles.modalView}>
              <View>
                <DropShadow
                  shadowDistance={5}
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{
                    marginBottom: 25,
                  }}>
                  <View style={styles.actionIconContainer}>
                    <Image
                      source={require('../../../images/ConfirmActionIcon.png')}
                    />
                  </View>
                </DropShadow>
              </View>
              <Text style={styles.actionHeader}>
                Confirm Booking with Obinna Nwachukwu{' '}
              </Text>
              <Text style={styles.actionText}>
                A deduction of 5000 will occur from your wallet to facilitate
                this action.
              </Text>
              {/* eslint-disable-next-line react-native/no-inline-styles */}
              <Text style={[styles.actionText, {marginBottom: 32}]}>
                Rest assured, if they cannot confirm their availability, you
                will receive an instant refund. That's our guarantee.
              </Text>
              <View style={[styles.viewContainer, styles.bookAgainContainer]}>
                <TouchableOpacity
                  style={[styles.bookAgainBtn]}
                  activeOpacity={0.8}
                  onPress={() => {
                    setModalVisible(false);
                    formikRef?.current?.submitForm();
                    setIsSubmitting(true);
                    setActionSuccessModal(true);
                  }}>
                  <Text
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                      color: Colors.WHITE,
                      fontFamily: Fonts.MEDIUM,
                      fontSize: 19,
                      textAlign: 'center',
                    }}>
                    Confirm Booking
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setModalVisible(false)}>
                <Text style={[styles.cancel]}>Cancel Booking</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
      {/* Action Success Modal */}
      <View style={styles.centeredView}>
        <Modal
          visible={actionSuccessModal}
          animationType="slide"
          transparent={true}
          onRequestClose={() => {
            setActionSuccessModal(false);
          }}>
          <View style={styles.modalItemCenteredView}>
            {/* eslint-disable-next-line react-native/no-inline-styles */}
            <View style={[styles.modalView, {paddingBottom: 50}]}>
              <View>
                <DropShadow
                  shadowDistance={5}
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{
                    marginBottom: 25,
                  }}>
                  <View style={styles.actionIconContainer}>
                    <Image
                      source={require('../../../images/ActionSuccessIcon.png')}
                    />
                  </View>
                </DropShadow>
              </View>
              <Text style={styles.actionHeader}>
                You have successfully booked Obinna Nwachukwu for a therapist
                session on the 12th of April, 2024
              </Text>

              <View style={[styles.viewContainer, styles.bookAgainContainer]}>
                <TouchableOpacity
                  style={[styles.bookAgainBtn]}
                  activeOpacity={0.8}
                  onPress={() => {
                    navigation.navigate('Browse Therapist');
                  }}>
                  <Text
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                      color: Colors.WHITE,
                      fontFamily: Fonts.MEDIUM,
                      fontSize: 19,
                      textAlign: 'center',
                    }}>
                    Finish
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerView: {
    paddingLeft: 25,
    marginBottom: 37,
  },
  headerText: {
    fontFamily: Fonts.SEMI_BOLD,
    fontSize: 17,
    color: '#3C3C3C',
    marginBottom: 5,
  },
  supportText: {
    fontFamily: Fonts.REGULAR,
    fontSize: 14,
    color: '#5D6B67',
  },
  formItemContainer: {
    paddingRight: 20,
    paddingLeft: 25,
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
  chooseTimeBtn: {
    paddingVertical: 16,
    borderRadius: 7,
    backgroundColor: Colors.WHITE,
    justifyContent: 'center',
    width: '100%',
    borderWidth: 1,
    borderColor: '#005468',
  },
  chooseTimeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewContainer: {
    marginBottom: 20,
    // backgroundColor: 'red',
    width: '100%',
  },
  label: {
    marginBottom: 10,
    fontFamily: Fonts.REGULAR,
    fontSize: 14,
    letterSpacing: 0.1,
    color: Colors.LIGHT_GREY,
  },
  selected: {
    marginBottom: 40,
  },
  selectedRangeContainer: {
    marginTop: 15,
  },
  selectedRangeItem: {
    fontFamily: Fonts.MEDIUM,
    fontSize: 14,
    lineHeight: 19,
    color: '#005468',
  },
  error: {
    fontFamily: Fonts.REGULAR,
    fontSize: 16,
    letterSpacing: 0.1,
    color: Colors.DANGER,
    paddingBottom: 4,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#3c3c3cc7',
  },
  modalItemCenteredView: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
    backgroundColor: '#3c3c3cc7',
  },
  modalView: {
    // width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 35,
    paddingTop: 35,
    paddingBottom: 175,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  actionIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 21,
    borderRadius: 50,
  },
  actionHeader: {
    fontFamily: Fonts.MEDIUM,
    fontSize: 15,
    marginBottom: 19,
    color: '#3C3C3C',
    textAlign: 'center',
  },
  actionText: {
    fontFamily: Fonts.N_MEDIUM,
    fontSize: 15,
    marginBottom: 19,
    textAlign: 'center',
    color: '#777777',
  },
  cancel: {
    fontFamily: Fonts.MEDIUM,
    fontSize: 16,
    color: '#BF1D1D',
  },
});

export default BookSession;
