import React, {useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors, Fonts} from '../../../General/utils/constants';
import {Formik, FormikProps} from 'formik';
import {loginValidationSchema} from '../validation-schema';
import {FormikTextInput} from '../../../General/components/FormikTextInput';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationType} from '../../../Navigation/types/navigation';
import Toast from 'react-native-toast-message';
import {useLogin} from '../hooks';
import {handleError} from '../../../General/utils/helpers';
import {useAuthContext} from '../../../General/context';

const Login = () => {
  const [showPassword, setShowPassword] = useState(true);
  const formikRef = useRef<FormikProps<any>>();
  const navigation = useNavigation<StackNavigationType>();
  const {setToken, setRefreshToken, setUser} = useAuthContext();

  const initialValues = {
    email: '',
    password: '',
  };
  const {mutate, isLoading} = useLogin({
    onSuccess(res) {
      const data = res?.data;
      console.log(JSON.stringify(data, null, 2));
      if (!data) {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Error processig request',
        });
      }

      Toast.show({type: 'success', text1: 'Success', text2: data?.message});
      const tokens = data?.data?.token;
      const user = data?.data?.user;
      setToken(tokens.access_token);
      setRefreshToken(tokens.refresh_token);
      setUser(user);
      setTimeout(() => {
        navigation.navigate('tabs');
      }, 2000);
    },
    onError(error: any) {
      console.log(error);

      handleError(error, message => {
        console.log(message);
        Toast.show({type: 'error', text1: 'Error', text2: message});
      });
    },
  });
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../images/LoginBackground.png')}
        style={styles.background}>
        <View style={styles.headerTextContainer}>
          <Image source={require('../../../images/UserIcon.png')} />
          <Text style={styles.headerText}>Create an Account</Text>
        </View>
        <View style={styles.loginWithGoogleContainer}>
          <TouchableOpacity style={styles.google} activeOpacity={0.7}>
            <Image source={require('../../../images/GoogleIcon.png')} />
            <Text style={styles.cta}>Log in with Google</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divider}>
          <View style={styles.line} />
          <Text style={styles.or}>or</Text>
          <View style={styles.line} />
        </View>
        <ScrollView style={styles.formContainer}>
          <Formik
            innerRef={formikRef as any}
            initialValues={initialValues}
            validationSchema={loginValidationSchema}
            enableReinitialize={true}
            onSubmit={(values: any) => {
              console.log({...values});
              mutate(values);
            }}>
            {({handleSubmit}) => {
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
                      labelStyles={{
                        color: Colors.WHITE,
                        borderColor: Colors.WHITE,
                      }}
                      // eslint-disable-next-line react-native/no-inline-styles
                      inputStyles={{
                        borderColor: Colors.WHITE,
                        backgroundColor: 'transparent',
                        color: Colors.WHITE,
                      }}
                    />

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
                      labelStyles={{
                        color: Colors.WHITE,
                      }}
                      // eslint-disable-next-line react-native/no-inline-styles
                      inputStyles={{
                        borderColor: Colors.WHITE,
                        backgroundColor: 'transparent',
                        color: Colors.WHITE,
                      }}
                      iconStyles={{tintColor: Colors.WHITE}}
                    />
                  </ScrollView>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleSubmit()}
                    activeOpacity={0.8}>
                    <Text style={styles.btn_text}>
                      {isLoading ? 'Logging in' : 'Login'}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.prompt}
                    activeOpacity={1}
                    onPress={() => {
                      navigation.navigate('Signup');
                    }}>
                    <Text style={styles.account}>Don’t have an account?</Text>
                    <Text style={styles.register}>Register now</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          </Formik>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  background: {
    flex: 1,
    paddingTop: Platform.OS !== 'android' ? 50 : 0,
  },
  headerTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 56,
    marginTop: 86,
  },
  headerText: {
    fontFamily: Fonts.BOLD,
    fontSize: 20,
    color: Colors.WHITE,
    lineHeight: 30,
    marginTop: 16,
  },
  loginWithGoogleContainer: {
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    marginHorizontal: 25,
  },
  google: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 18,
    borderRadius: 20,
    overflow: 'hidden',
    width: '100%',
  },
  cta: {
    marginHorizontal: 14,
    fontFamily: Fonts.REGULAR,
    fontSize: 17,
    color: Colors.PRIMARY_BLACK,
  },
  or: {
    marginHorizontal: 32,
    fontFamily: Fonts.REGULAR,
    fontSize: 18,
    color: Colors.WHITE,
  },
  prompt: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  register: {
    color: Colors.WHITE,
    fontSize: 15,
    fontFamily: Fonts.BOLD,
    marginHorizontal: 4,
    textDecorationLine: 'underline',
  },
  account: {
    color: Colors.WHITE,
    fontSize: 15,
    fontFamily: Fonts.N_SEMI_BOLD,
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
    // height: Platform.OS === 'android' ? 380 : 450,
  },
  divider: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 24,
    marginTop: 30,
  },
  line: {
    height: 1.5,
    width: 96,
    backgroundColor: Colors.WHITE,
    borderRadius: 8,
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

export default Login;
