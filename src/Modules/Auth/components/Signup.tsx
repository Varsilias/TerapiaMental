import React, {useCallback, useRef, useState} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SignupWrapper from './SignupWrapper';
import {Colors, Fonts} from '../../../General/utils/constants';
import {Formik, FormikProps} from 'formik';
import {signupValidationSchema} from '../validation-schema';
import {FormikDropdown} from '../../../General/components/FormikDropdown';
import {Picker} from '@react-native-picker/picker';
import {DatePickerModal} from 'react-native-paper-dates';
import {date as dayjs} from '../../../General/utils/date';
import {FormikTextInput} from '../../../General/components/FormikTextInput';

const Signup = () => {
  const [date, setDate] = useState(undefined);
  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const formikRef = useRef<FormikProps<any>>();

  const onDismissSingle = useCallback(() => {
    setOpen(false);
    formikRef.current?.setFieldTouched('date_of_birth', true);
  }, [setOpen]);

  const onConfirmSingle = useCallback(
    (params: {date: any}) => {
      setOpen(false);
      setDate(params.date);
      formikRef.current?.setFieldValue(
        'date_of_birth',
        dayjs(params.date).format('DD/MM/YYYY'),
      );
    },
    [setOpen, setDate],
  );

  const initialValues = {
    lastname: '',
    firstname: '',
    email: '',
    password: '',
    phone_number: '',
    date_of_birth: '',
    gender: '',
  };
  const genderSelect = [
    {
      label: 'Male',
      value: 'Male',
    },
    {
      label: 'Female',
      value: 'Female',
    },
  ];
  return (
    <SignupWrapper activeIndex={0}>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>Create an Account</Text>
      </View>
      <ScrollView style={styles.formContainer}>
        <Formik
          innerRef={formikRef as any}
          initialValues={initialValues}
          validationSchema={signupValidationSchema}
          enableReinitialize={true}
          onSubmit={values => {
            const dob = new Date(values.date_of_birth).toISOString();
            console.log({...values, date_of_birth: dob});
          }}>
          {({handleSubmit, handleChange, values}) => {
            return (
              <View>
                <ScrollView
                  style={styles.inputContainer}
                  nestedScrollEnabled={true}>
                  <FormikTextInput
                    name="email"
                    label="Email Address"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoFocus={true}
                    enterKeyHint="next"
                    returnKeyLabel="next"
                  />

                  {Platform.OS === 'android' ? (
                    <FormikDropdown
                      name="gender"
                      label="Gender"
                      items={genderSelect}
                    />
                  ) : (
                    <Picker
                      // eslint-disable-next-line react-native/no-inline-styles
                      itemStyle={{height: 160}}
                      enabled={true}
                      placeholder="Choose an option"
                      selectedValue={values.gender}
                      onValueChange={value => handleChange('gender')(value)}>
                      {genderSelect.map(gender => {
                        return (
                          <Picker.Item
                            label={gender.label}
                            value={gender.value}
                            key={gender.label}
                          />
                        );
                      })}
                    </Picker>
                  )}

                  <FormikTextInput
                    name="firstname"
                    label="Firstname"
                    keyboardType="default"
                    autoCapitalize="words"
                    enterKeyHint="next"
                    returnKeyLabel="next"
                  />

                  <DatePickerModal
                    locale="en-GB"
                    mode="single"
                    visible={open}
                    onDismiss={onDismissSingle}
                    date={date}
                    onConfirm={onConfirmSingle}
                    presentationStyle="pageSheet"
                    endYear={new Date().getFullYear()}
                    validRange={{endDate: new Date()}}
                    closeIcon="close"
                    editIcon="pencil"
                    calendarIcon="calendar"
                  />
                  <FormikTextInput
                    name="lastname"
                    label="Lastname"
                    keyboardType="default"
                    autoCapitalize="words"
                    enterKeyHint="next"
                    returnKeyLabel="next"
                  />
                  <FormikTextInput
                    name="phone_number"
                    label="Phone Number"
                    keyboardType="number-pad"
                    enterKeyHint="next"
                    returnKeyLabel="next"
                  />

                  <TouchableOpacity
                    onPress={() => setOpen(true)}
                    activeOpacity={0.7}>
                    <FormikTextInput
                      name="date_of_birth"
                      label="Date of Birth"
                      keyboardType="default"
                      editable={false}
                      enterKeyHint="next"
                      returnKeyLabel="next"
                      icon={require('../../../images/DatePickerIcon.png')}
                      onIconClick={() => setOpen(true)}
                      onPress={() => setOpen(true)}
                    />
                  </TouchableOpacity>
                  <FormikTextInput
                    name="password"
                    label="Password"
                    keyboardType="default"
                    enterKeyHint="done"
                    secureTextEntry={showPassword}
                    returnKeyLabel="done"
                    onSubmitEditing={() => handleSubmit()}
                    icon={require('../../../images/EyeIcon.png')}
                    onIconClick={() => setShowPassword(!showPassword)}
                  />
                </ScrollView>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => handleSubmit()}
                  activeOpacity={0.8}>
                  <Text style={styles.btn_text}>Sign Up</Text>
                </TouchableOpacity>
                <View style={styles.divider}>
                  <View style={styles.line} />
                  <Text style={styles.cta}>or sign up with</Text>
                  <View style={styles.line} />
                </View>
                <View style={styles.googleIconContainer}>
                  <TouchableOpacity
                    style={styles.googleIcon}
                    activeOpacity={0.5}>
                    <Image source={require('../../../images/GoogleIcon.png')} />
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        </Formik>
      </ScrollView>
    </SignupWrapper>
  );
};

const styles = StyleSheet.create({
  headerTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 29,
  },
  headerText: {
    fontFamily: Fonts.SEMI_BOLD,
    fontSize: 20,
    color: Colors.PRIMARY_BLACK,
    lineHeight: 30,
  },
  formContainer: {
    paddingHorizontal: 25,
    paddingBottom: 40,
    // backgroundColor: Colors.BLACK,
  },
  button: {
    width: '100%',
    backgroundColor: Colors.TEAL,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    overflow: 'hidden',
    height: 55,
    marginTop: 25,
    marginBottom: 23,
  },
  btn_text: {
    color: Colors.WHITE,
    fontFamily: Fonts.SEMI_BOLD,
    fontSize: 19,
  },
  inputContainer: {
    height: Platform.OS === 'android' ? 380 : 450,
  },
  divider: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 19,
  },
  line: {
    height: 1.5,
    width: 96,
    backgroundColor: Colors.BLACK,
    borderRadius: 8,
  },
  cta: {
    marginHorizontal: 20,
    fontFamily: Fonts.N_SEMI_BOLD,
    fontSize: 15,
  },
  googleIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 19,
    // backgroundColor: Colors.TEAL,
  },
  googleIcon: {
    width: 50,
    height: 50,
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: Fonts.MEDIUM,
    textAlign: 'center',
    fontSize: 20,
    borderRadius: 60,
    elevation: 50,
    shadowColor: '#AEB9BC',
    shadowOpacity: 1,
    shadowRadius: 3,
    shadowOffset: {width: 1, height: 1},
  },
  input: {
    height: 55,
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
    fontFamily: Fonts.REGULAR,
    color: Colors.PRIMARY_BLACK,
    paddingHorizontal: 10,
  },
  label: {
    fontFamily: Fonts.REGULAR,
    fontSize: 14,
    letterSpacing: 0.1,
    color: Colors.LIGHT_GREY,
    paddingBottom: 4,
  },
});

export default Signup;
